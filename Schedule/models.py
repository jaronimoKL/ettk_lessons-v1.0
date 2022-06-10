from django.db import models


class Teacher(models.Model):
    first_name = models.CharField(verbose_name="Имя", max_length=20)
    last_name = models.CharField(verbose_name="Фамилия", max_length=50)
    middle_name = models.CharField(verbose_name="Отчество", max_length=50)

    def __str__(self):
        return f"{self.last_name}"

    class Meta:
        verbose_name = "Преподаватель"
        verbose_name_plural = "Преподаватели"


class Group(models.Model):
    group_name = models.CharField("Группа", max_length=20)

    def __str__(self):
        return f"{self.group_name}"

    class Meta:
        verbose_name = "Группа"
        verbose_name_plural = "Группы"


class Cabinet(models.Model):
    cabinet_name = models.CharField("Кабинет", max_length=20)

    def __str__(self):
        return f"{self.cabinet_name}"

    class Meta:
        verbose_name = "Кабинет"
        verbose_name_plural = "Кабинеты"


class TimeTable(models.Model):
    number = models.PositiveSmallIntegerField("Номер пары", default=1)
    date = models.DateField("Дата пары")
    teacher = models.ForeignKey(Teacher, verbose_name="Преподаватель", on_delete=models.CASCADE)
    group = models.ForeignKey(Group, verbose_name="Группа", on_delete=models.CASCADE)
    cabinet = models.ForeignKey(Cabinet, verbose_name="Кабинет", on_delete=models.CASCADE)
    reduction = models.BooleanField("Сокращенный день?", default=False)

    def __str__(self):
        return f"{self.date} - {self.teacher.last_name} - {self.group} - {self.cabinet}"

    class Meta:
        verbose_name = "Расписание"
        verbose_name_plural = "Расписание"
