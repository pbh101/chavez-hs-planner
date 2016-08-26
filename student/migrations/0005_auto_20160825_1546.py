# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-25 15:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0004_attendance'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='attend_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='attendance',
            name='created',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]