from django.db import models
from django.contrib.auth.models import User

# Create your models here.




class Recipe(models.Model):
    user = models.ForeignKey(User, related_name="recipes", on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    ingredients = models.TextField()
    instructions = models.TextField()
    description = models.TextField(blank=True)
    image = models.URLField()
    like = models.ManyToManyField(User, related_name="liked_recipes", blank=True)

    def __str__(self):
        return f'{self.title}'