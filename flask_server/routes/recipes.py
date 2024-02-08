from flask import Blueprint, request, make_response
from db_collections import recipe_col
from helpers.common import clean_recipe
import json

recipes = Blueprint("recipes", __name__)

API_KEY = "d36fbc78732e43698019cbc00f22c1f1"

# Add option for intolerances (gluten, dairy, etc)
# Add option to filter cuisine type
# Add option to support equipment
# Add option for maxReadyTime


@recipes.route("/recipe/insert", methods=["GET"])
def load_recipes():
    with open("data/db-recipes.json", "r") as file:
        full_recipe_dict = json.load(file)
        for raw_recipe in full_recipe_dict.values():
            recipe = clean_recipe(raw_recipe)
            print(recipe["name"])
            recipe_col.insert(recipe)

    return make_response("OK", 200)


@recipes.route("/recipes", methods=["GET"])
def get_recipes():
    recipeNum = request.args.get("number")
    recipe_list = list(recipe_col.find({}, {"_id": 0}).limit(int(recipeNum)))
    if recipe_list:
        return make_response(recipe_list, 200)
    else:
        return make_response("No Recipes", 400)


@recipes.route("/recipe", methods=["GET"])
def delete_recipe():
    recipe_col.delete_many({})
