from flask import Blueprint, make_response, request
from db_collections import user_col
from helpers.common import validate_missing_keys

users = Blueprint("users", __name__)


@users.route("/user/clear", methods=["GET"])
def clear_users():
    try:
        user_col.remove()
    except Exception as error:
        return make_response(error, 400)

    return make_response("Cleared ", 200)


@users.route("/user", methods=["POST"])
def create_user():
    user_info = request.get_json()

    if validate_missing_keys(user_info, ["name", "username", "password"]):
        return make_response("Invalid sign up info", 400)

    user_info["ingredients"] = []
    user_info["appliances"] = []

    user_col.insert_one(user_info)
    return make_response("User Added", 200)


@users.route("/user/login", methods=["POST"])
def user_login():
    user_info = request.get_json()

    if validate_missing_keys(user_info, ["username", "password"]):
        return make_response("Invalid login info", 400)

    found_user = user_col.find_one(
        {"username": user_info["username"], "password": user_info["password"]},
        {"_id": 0},
    )

    if found_user:
        return make_response(found_user, 200)
    else:
        return make_response("Invalid login info", 400)
