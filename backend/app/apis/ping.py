from flask import Blueprint

api = Blueprint("ping", __name__)

@api.route("/ping")
def ping():
    return "pong"