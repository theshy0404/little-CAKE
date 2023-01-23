# coding:utf-8
import random
import types
from time import *

import simplejson
from flask import Flask, escape, make_response, jsonify, request
from flask_cors import CORS
from my_util import *

app = Flask(__name__)
CORS(app, resources=r'/*')


@app.route('/')
def index():
    res = make_response()
    res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Access-Control-Allow-Methods'] = 'OPTIONS,HEAD,GET,POST'
    res.headers['Access-Control-Allow-Headers'] = 'x-requested-with'
    return 'Happy NewYear!'


@app.route('/doProduce', methods=['GET', 'POST'])
def problem_type_admin():
    do_sql = open_sql('mycode')
    if request.method == 'GET':
        return 'Happy NewYear!'
    elif request.method == 'POST':
        params = request.json.get('params')
        produce = request.json.get('produce')
        result = do_sql_produce(do_sql, produce, params)
        close_sql(do_sql)
        return result


if __name__ == '__main__':
    app.run()
