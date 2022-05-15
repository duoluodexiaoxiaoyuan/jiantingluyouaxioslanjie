import axios from "axios";
export default async function request(url) {
  // 请求拦截器
  axios.interceptors.request.use(
    (req) => {
      // 在发送请求前要做的事儿
      console.log(1);
      return req;
    },
    (err) => {
      // 在请求错误时要做的事儿
      // 该返回的数据则是axios.catch(err)中接收的数据
      return Promise.reject(err);
    }
  );
  // 响应拦截器
  axios.interceptors.response.use(
    (res) => {
      if (localStorage.getItem("name") === "存储成功") {
        console.log("shabi1");
      } else {
        axios
          .get("http://127.0.0.1:8080/api/register")
          .then((res) => {
            console.log("shabi2");
            console.log(res);
            localStorage.setItem("name", "存储成功");
            return res;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // 请求成功对响应数据做处理
      console.log(2);
      // 该返回的数据则是axios.then(res)中接收的数据
      return res;
    },
    (err) => {
      // 在请求错误时要做的事儿
      // 该返回的数据则是axios.catch(err)中接收的数据
      return Promise.reject(err);
    }
  );
  return axios
    .get(url)
    .then((res) => {
      console.log(3);
      return res;
    })
    .catch((err) => {
      return err;
    });
}
