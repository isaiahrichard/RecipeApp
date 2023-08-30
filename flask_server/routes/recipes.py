from flask import Blueprint, request
import requests

recipes = Blueprint("recipes", __name__)

API_KEY = "d36fbc78732e43698019cbc00f22c1f1"


@recipes.route("/recipe", methods=["POST"])
def get_recipes():
    url = "https://api.spoonacular.com/recipes/findByIngredients"
    ingredients = ",".join(request.get_json()["ingredients"])
    params = {
        "apiKey": API_KEY,
        "number": 10,
        "ranking": 2,
        "ignorePantry": True,
        "ingredients": ingredients,
    }

    response = requests.get(url, params=params)
    # If the API call is successful
    if response.status_code == 200:
        # Parse the API response as JSON data
        data = response.json()
        # Return the list of recipe results
        return data
    # If the API call is not successful
    return []
