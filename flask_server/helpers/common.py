def validate_missing_keys(verify_dict, valid_keys):
    missing_keys = [key for key in list(verify_dict) if key not in valid_keys]
    return bool(missing_keys)


def clean_recipe(raw_recipe):
    recipe = {}
    recipe["ingredients"] = []
    for ingredient in raw_recipe["ingredients"]:
        recipe["ingredients"].append(
            ingredient.replace("\r", "").replace("/", "").replace("\\", "")
        )
    recipe["prepTime"] = raw_recipe["preptime"]
    recipe["cookTime"] = raw_recipe["cooktime"]
    recipe["totalTime"] = raw_recipe["preptime"] + raw_recipe["cooktime"]
    recipe["name"] = raw_recipe["name"]
    recipe["tags"] = raw_recipe["tags"]
    recipe["instructions"] = raw_recipe["instructions"].split("\r\n\r\n")
    return recipe
