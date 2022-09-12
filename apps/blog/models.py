from distutils.command.upload import upload
from pyexpat import model
from django.utils import timezone
from turtle import Turtle
import uuid
from django.db import models

from apps.category.models import Category


def blog_directory_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):

    #Make a filter to show only the post with status "published"
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    #Status of posts
    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    blog_uuid =     models.UUIDField(default=uuid.uuid4, unique=True)
    title =         models.CharField(max_length=255)
    slug =          models.SlugField(unique=True)
    thumbnail =     models.ImageField(upload_to=blog_directory_path)
    video =         models.FileField(upload_to=blog_directory_path, blank=True, null=True)
    description =   models.TextField()
    excerpt =       models.CharField(max_length=100)

    # author =        models.CharField(max_length=100)
    category =      models.ForeignKey(Category, on_delete=models.PROTECT)
    published =     models.DateTimeField(default=timezone.now)
    status =        models.CharField(max_length=10, choices=options, default='draft')

    objects =       models.Manager()
    postobjects =   PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
    
    def get_video(self):
        if self.video:
            return self.video.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''
