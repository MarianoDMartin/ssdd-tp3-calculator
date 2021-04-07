from flask_restx import Api

from .ping import api as ping
from .execute import api as execute_api


api = Api(prefix="/", validate=True, title="Sistemas distribuidos TP3 - Calculator")

api.add_namespace(execute_api)

__all__ = ["api", "ping"]
