import os

from http import HTTPStatus  # noqa: E402
from flask import request  # noqa: E402
from flask_restx import abort  # noqa: E402
from app import create_app  # noqa: E402

app = create_app()

if __name__ == "__main__":  
    app.run(host="0.0.0.0", port=8080, debug=True)