# coding=utf-8
import json

import simplejson
import MySQLdb
import my_text as text

default_database = 'lawProject'
number_types = ['int', 'decimal', 'float']
print('int' in number_types)


def open_sql(database_name):
    db = MySQLdb.connect("localhost", "root", "sql2008", database_name, charset='utf8', autocommit=True)
    return db.cursor()


def close_sql(cursor):
    cursor.close()


def get_produce_params(cursor, produce):
    sql = f"select PARAMETER_NAME , DATA_TYPE from information_schema.PARAMETERS where specific_schema='{default_database}' and specific_name='{produce}';"
    cursor.execute(sql)
    return result_to_json(cursor)


def do_sql_produce(cursor, produce, params):
    # 先提取存储过程的参数
    produce_params_result = get_produce_params(cursor, produce)
    params_sql = ""
    # 将前端的参数和存储过程进行匹配
    if len(produce_params_result):
        for produce_param in simplejson.loads(produce_params_result):
            param_type = produce_param["DATA_TYPE"]
            param_name = produce_param["PARAMETER_NAME"][1:]
            param_value = params[param_name]
            if param_type in number_types:
                params_sql = params_sql + f"{param_value},"
            else:
                params_sql = params_sql + f"'{param_value}',"
        params_sql = params_sql[0:-1]
    print(f"call {produce}({params_sql});")
    # 匹配后拼接最终执行的语句
    cursor.execute(f"call {produce}({params_sql});")
    if cursor.description is None:
        return 'No Data...'
    # sql执行结果转换为json数组
    return result_to_json(cursor)


def do_sql(cursor, sql):
    cursor.execute(sql)
    return result_to_json(cursor)


def update_sql(cursor, sql):
    cursor.execute(sql)
    return cursor


def result_to_json(cur):
    # try:
    #     row_headers = [x[0] for x in cur.description]
    #     rv = cur.fetchall()
    #     json_data = []
    #     for result in rv:
    #         json_data.append(dict(zip(row_headers, result)))
    #     print(json_data)
    #     return simplejson.dumps(json_data)
    # except:
    #     return 's'
    row_headers = [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers, result)))
    return simplejson.dumps(json_data, ensure_ascii=False)

# cursor=open_sql('mycode')
# print(do_sql_produce(cursor,'get_little_cake'))
# close_sql(cursor)
