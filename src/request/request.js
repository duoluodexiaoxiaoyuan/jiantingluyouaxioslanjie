import axios from "axios";
// 参考https://www.bianchengquan.com/article/492601.html
// 用sleep不用setTimeout是让其不要异步执行,不让异步执行相当于有一条路，直接堵死了。直接都得等10s，没有效果
function sleep(time) {
  let timeStamp = new Date().getTime();
  let endTime = timeStamp + time;
  while (true) {
    if (new Date().getTime() > endTime) {
      return;
    }
  }
}

export default async function request(url) {
  // 请求拦截器
  axios.interceptors.request.use(
    async (req) => {
      // 在发送请求前要做的事儿
      console.log(1);
      console.log(req);
      if (req.url === "http://127.0.0.1:8080/api/register") {
        sleep(10000);
        console.log("等10秒");
      }
      // if (req.url === "http://127.0.0.1:8080/api/login") {
      //   axios
      //     .get("http://127.0.0.1:8080/api/register")
      //     .then((res) => {
      //       console.log(res);
      //       console.log("我要疯掉了");
      //       return req;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // } else {
      //   return req;
      // }
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
      // if (localStorage.getItem("name") === "存储成功") {
      //   console.log("shabi1");
      // } else {
      //   axios
      //     .get("http://127.0.0.1:8080/api/register")
      //     .then((res) => {
      //       console.log("shabi2");
      //       console.log(res);
      //       localStorage.setItem("name", "存储成功");
      //       return res;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
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
