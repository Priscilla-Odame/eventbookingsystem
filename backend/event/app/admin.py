from django.contrib import admin
from app.models.user import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','firstname', 'lastname','email','password','date_of_birth')


admin.site.register(User,UserAdmin)