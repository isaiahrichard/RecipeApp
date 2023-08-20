from flask import Blueprint, make_response
from db_collections import user_col

users = Blueprint("users", __name__)


@users.route("/users", methods=["GET"])
def get_users():
    return make_response({"users": ["Isaiah", "Afraz", "Leon", "Skyy", "Ian"]}, 200)


@users.route("/user", methods=["GET"])
def add_user():
    # user_col.insert_one({"Name": "Isaiah", "Age": "20"})
    return make_response("OK", 200)
