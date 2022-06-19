from dotenv import load_dotenv
import os

load_dotenv('./deployment/env/.env.local')

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8o23rbt2_+&k3q+pmu)5%asj6y2w35gw345gw45gsdf12e123ejpkag')
# DEBUG = True
DEBUG = bool(os.environ.get('DJANGO_DEBUG', True))
ALLOWED_HOSTS = ['*']
