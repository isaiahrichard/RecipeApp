from flask import Flask
from routes.users import users
from routes.recipes import recipes
from routes.ingredients import ingredients

app = Flask(__name__)
app.register_blueprint(users)
app.register_blueprint(recipes)
app.register_blueprint(ingredients)


if __name__ == "__main__":
    app.run(debug=True)
