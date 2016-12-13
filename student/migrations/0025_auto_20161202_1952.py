# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-12-02 19:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0024_remove_highschool_tier5_points'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='highschool',
            name='id',
        ),
        migrations.AlterField(
            model_name='highschool',
            name='short_name',
            field=models.CharField(default='testHS', max_length=100, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]