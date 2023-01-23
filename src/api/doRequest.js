import axios from "axios";

export const doSQLProduce = async (produce, params) => {
  let result;
  let error;
  await axios("http://127.0.0.1:5000/doProduce", {
    method: "POST", // or 'GET'
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      produce,
      params,
    },
  })
    .then((res) => (result = res.data))
    .catch((err) => (error = err));
  if (result) return Promise.resolve(result);
  return Promise.reject(error);
};
