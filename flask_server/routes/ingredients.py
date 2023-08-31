from flask import Blueprint, request, make_response
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
