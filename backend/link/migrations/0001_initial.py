# Generated by Django 3.2.9 on 2021-12-08 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShortLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linkId', models.CharField(max_length=10)),
                ('views', models.IntegerField(default=0)),
            ],
        ),
    ]
