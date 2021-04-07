from flask import jsonify
from flask_restx import Namespace, Resource, reqparse

from app.services import execute_service

api = Namespace('execute', description='execute calculator', path="/execute")


@api.route("/")
class InfrastructureResource(Resource):

    post_parser = reqparse.RequestParser()
    post_parser.add_argument('data', type=str, required=True, location='json')

    @api.expect(post_parser)
    def post(self):
        """
        Executes the calculator function
        """

        args = self.post_parser.parse_args(strict=True)
        formula = args.get('data')

        # Aca llamas al validator
        valid = execute_service.validate_formula(formula)

        if valid:
            # Aca ejecutas el eval
            res = execute_service.execute_formula(formula)
            return {"data": res}, 200
        
        return {"message": "Formula is invalid"}, 400