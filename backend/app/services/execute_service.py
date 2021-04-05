import re

def validate_formula(formula):
    # return bool(re.match('^[0-9,+,(,),*,-,/,^]*$', formula))
    return True

def execute_formula(formula):
    return eval(formula)