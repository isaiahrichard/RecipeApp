from flask import Blueprint, request, make_response
from db_collections import user_col
import requests

ingredients = Blueprint("ingredients", __name__)

API_KEY = "d36fbc78732e43698019cbc00f22c1f1"


@ingredients.route("/ingredients", methods=["GET"])
def get_ingredients():
    url = "https://api.spoonacular.com/food/ingredients/search"
    params = {
        "apiKey": API_KEY,
        "number": 44,
        "query": "vegetables",
    }
    response = requests.get(url, params=params)
    print(response.json())
    return make_response("OK", 200)


@ingredients.route("/ingredients/add", methods=["POST"])
def add_ingredients():
    ingredient = request.get_json()

    if "ingredient" not in ingredient:
        return make_response("Internal Error", 400)

    ingredient = ingredient["ingredient"]

    user_col.update_one(
        {"username": "isaiah3415"}, {"$push": {"ingredients": ingredient}}
    )
    user = user_col.find_one({"username": "isaiah3415"})
    return make_response(f"{ingredient} added", 200)
