import { extend } from "umi-request";


const request = extend({});

/**
 * @param { string } url
 * @param { Object } options
 */

const index = (url: string, options: Record<string, any> = {}) => {
  const { method = "POST", data, params, ...other } = options;

  request.interceptors.request.use((url, options) => {
    return {
      url,
      options,
    };
  });

  request.interceptors.response.use(response => response);

  return request(url, {
    method,
    data,
    params,
    ...other,
  });
};

export default index;
