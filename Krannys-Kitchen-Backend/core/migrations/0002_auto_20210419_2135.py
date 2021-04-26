# Generated by Django 3.1.7 on 2021-04-19 21:35

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='like',
            field=models.ManyToManyField(blank=True, related_name='liked_recipes', to=settings.AUTH_USER_MODEL),
        ),
    ]
