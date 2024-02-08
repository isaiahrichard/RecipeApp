from pymongo import MongoClient

db = MongoClient(
    "mongodb+srv://isaiah:Nadder3415@recipe-app.daa69.mongodb.net/?retryWrites=true&w=majority"
)

RecipEasyDB = db.get_database("recipe-app")

user_col = RecipEasyDB.get_collection("users")
recipe_col = RecipEasyDB.get_collection("recipes")
