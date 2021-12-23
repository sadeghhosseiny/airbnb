import axios from "axios";

export const api = async (type, url, data) => {
  const options = {
    method: type,
    url,
    ...(data ? { data } : {}),
  };
  return axios({
    ...options,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
};
