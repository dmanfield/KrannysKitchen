from django.urls import path
from .views import current_user, UserList, RecipeListViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register('recipes', RecipeListViewSet, basename="recipes")

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    # path('recipes/', RecipeList.as_view())
]

urlpatterns += router.urls