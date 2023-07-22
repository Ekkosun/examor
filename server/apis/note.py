from fastapi import UploadFile
from fastapi import File, Form, UploadFile

from utils import api_result
from utils.MySQLHandler import MySQLHandler
from typings.note_types import Icon


def _get_notes():
    select_query = "SELECT * FROM t_note;"
    res = MySQLHandler().execute_query(select_query)
    return api_result.success(res)


def _get_note(id: int):
    select_query = f"SELECT * FROM t_note WHERE id = {id}"
    res = MySQLHandler().execute_query(select_query, single=True)
    return api_result.success(res)


def _add_note(
    noteName: str = Form(),
    files: UploadFile = File(default=None),
    notionId: str = Form(default=None)
):
    print(noteName)
    print(files)
    print(notionId)
    return api_result.success()


def _update_note_icon(data: Icon):
    note_id = data.id
    new_icon = data.icon

    table_name = "t_note"
    set_values = f"icon = '{new_icon}'"
    condition = f"id = {note_id}"
    MySQLHandler().update_table_data(table_name, set_values, condition)
    return api_result.success()
