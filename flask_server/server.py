from flask import Flask
from routes.users import users
from routes.recipes import recipes

app = Flask(__name__)
app.register_blueprint(users)
app.register_blueprint(recipes)


if __name__ == "__main__":
    app.run(debug=True)
