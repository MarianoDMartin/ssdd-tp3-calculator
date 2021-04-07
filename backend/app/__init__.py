from flask import Flask
from app.apis import api, ping


def create_app():
    app = Flask(__name__)

    # accepts both /endpoint and /endpoint/ as valid URLs
    app.url_map.strict_slashes = False

    app.register_blueprint(ping, url_prefix="/")

    api.init_app(app)

    return app