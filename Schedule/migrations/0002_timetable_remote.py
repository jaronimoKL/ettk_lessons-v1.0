# Generated by Django 4.0.4 on 2022-06-14 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Schedule', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='timetable',
            name='remote',
            field=models.BooleanField(default=False, verbose_name='Дистант?'),
        ),
    ]
