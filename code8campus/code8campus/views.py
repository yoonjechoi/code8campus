import os

from django.conf import settings
from django.http import HttpResponse
from django.views.generic import View


class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(settings.BASE_DIR,
                                   'frontend', 'build', 'index.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )
