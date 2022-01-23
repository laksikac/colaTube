import os

os.system("python ./manage.py flush")

os.system("python ./manage.py createsuperuser")

os.system("python ./manage.py loaddata ./mock-data.json")

os.system("python ./manage.py runserver")