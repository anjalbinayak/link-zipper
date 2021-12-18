from .models import ShortLink, Link
from .lib import getUniqueID
from pprint import pprint


def createShortLink(linksList):
    shortLinkObj = ShortLink()
    shortLinkObj.linkId = getUniqueID(5)
    shortLinkObj.save()
    pprint(linksList)
    for link in linksList:
        pprint(link)
        createLink(shortLinkObj, link)
    return shortLinkObj.linkId


def createLink(ShortLink, link):
    linkObj = Link()
    linkObj.link = link
    linkObj.shortlink = ShortLink
    linkObj.save()
    return True
