from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

from hello import views

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),    
    url(r'^$', views.main, name='main'),
]
