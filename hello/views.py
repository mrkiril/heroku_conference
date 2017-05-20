from django.shortcuts import render
from django.template.loader import get_template


def main(request):
    return render(request, 'conference.html', {})



def test(request):
    return render(request, 'test.html', {})

