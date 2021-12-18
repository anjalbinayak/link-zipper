from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators import csrf
from rest_framework import generics, serializers
from link.serializers import LinkSerializer, ShortLinkSerializer
from .models import Link, ShortLink
import json

from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt
from .service import createShortLink
from django.core import serializers

from pprint import pprint

from django.views.decorators.cache import never_cache
from django.core.cache import cache
from django.utils.cache import get_cache_key


# from rest_framework import permissions


# Create your views here.
class LinkAPIView(generics.ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer


class LinkDetailAPI(generics.RetrieveAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    # permission_classes = [permissions.IsAuthenticated]


class ShortLinkAPIView(generics.ListCreateAPIView):
    queryset = ShortLink.objects.all()
    serializer_class = ShortLinkSerializer


class ShortLinkDetailAPI(generics.RetrieveAPIView):
    queryset = ShortLink.objects.all()
    serializer_class = ShortLinkSerializer


@csrf_exempt
def zipLinks(request):
    if request.method != "POST":
        return HttpResponse("Hey Visit us again")

    requestBodyRaw = request.body
    pprint(requestBodyRaw)

    requestBodyProcessed = json.loads(requestBodyRaw)

    pprint(requestBodyProcessed)
    linkId = createShortLink(requestBodyProcessed["links"])
    # key = get_cache_key(request)
    # if cache.has_key(key):
    #     print("Cache detected")
    #     cache.delete(key)
    return HttpResponse(linkId)


@never_cache
def get_links_by_link_id(request, id):
    shortlinkModels = ShortLink.objects.all().filter(linkId=id)
    if len(shortlinkModels) == 0:
        return HttpResponse("Thanks. Keep visiting")

    linkObjects = Link.objects.all().filter(shortlink_id=shortlinkModels[0].id)
    # pprint(linkObjects)
    linkJsonDict = []
    for link in linkObjects:
        serializer = LinkSerializer(link)
        pprint(serializer.data)
        linkJsonDict.append(serializer.data)
    return HttpResponse(json.dumps(linkJsonDict))
