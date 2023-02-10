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
    return 'Happy 根路径!'

# 表示flask监听路径为/doProduce的请求并执行下列代码
@app.route('/doProduce', methods=['GET', 'POST'])
def do_sql_produce():
    # 数据库执行对象，在这里打开
    do_sql = open_sql('little_cake')
    if request.method == 'GET':
        return 'Happy冰心!'
    elif request.method == 'POST':
        # 取出请求参数
        params = request.json.get('params')
        # 取出请求存储过程
        produce = request.json.get('produce')
        result = do_sql_produce(do_sql, produce, params)
        close_sql(do_sql)
        return result


if __name__ == '__main__':
    app.run()
