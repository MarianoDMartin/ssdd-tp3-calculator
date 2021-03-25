import re

def validate_formula(formula):
    return bool(re.match('^[0-9,+,(,),*,-,/]*$', formula))

def execute_formula(formula):
    return eval(formula)