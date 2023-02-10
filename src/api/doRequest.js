import axios from "axios";

export const doSQLProduce = async (produce, params) => {
  let result;
  let error;
  // http://127.0.0.1:5000 是监听的后端端口
  // /doProduce是请求的路径
  await axios("http://127.0.0.1:5000/doProduce", {
    method: "POST", // or 'GET'
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      produce, // 存储过程
      params, // 参数
    },
  })
    // 请求成功的回调函数，会在请求成功后执行
    .then((res) => (result = res.data))
    // 请求失败的回调函数，会在请求失败后执行
    .catch((err) => (error = err));
  if (result) return Promise.resolve(result);
  return Promise.reject(error);
};
