import axios from "axios";

export const feacthGet = (methods, urls) => {
  const config = {
    method: methods,
    url: `https://jsonplaceholder.typicode.com/${urls}`,
  };
  return axios(config);
};

export const feacthReq = (methods, urls, data) => {
  const config = {
    method: methods,
    url: `https://jsonplaceholder.typicode.com/todos/${urls}`,
    data: data,
  };
  return axios(config);
};
