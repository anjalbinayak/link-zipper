from django.urls import path
from .views import (
    LinkAPIView,
    ShortLinkAPIView,
    ShortLinkDetailAPI,
    LinkDetailAPI,
    get_links_by_link_id,
    zipLinks,
)


urlpatterns = [
    path("link", LinkAPIView.as_view()),
    path("link/<int:pk>", LinkDetailAPI.as_view()),
    path("shortlink", ShortLinkAPIView.as_view()),
    path("shortlink/<int:pk>", ShortLinkDetailAPI.as_view()),
    path("zip/", zipLinks),
    path("getlinks/<id>", get_links_by_link_id),
]
