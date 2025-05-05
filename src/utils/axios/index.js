import axios from "axios";
import { toast } from "react-toastify";
import { store } from "@/store";
import { logoutUser } from "@services/auth/authSlice";

const GENERAL_API_ERR_MSG =
  "Unable to process this request. Please try again. If the issue persists, please contact support.";

const excludedUrls = [];

const axiosBaseQuery = ({ baseUrl } = { baseUrl: "" }) => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const token = store.getState().auth.token;

      console.info(
        "******** API CALL ********",
        "\nreq-method: " + method,
        "\nreq-url: " + baseUrl + url,
        "\nreq-token: " + token,
        "\nreq-data: " + JSON.stringify(data),
        "\nreq-params: " + JSON.stringify(params)
      );

      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
      });

      console.log(
        "\nres-status: " + result.status,
        "\nres-data: " + JSON.stringify(result.data),
        "\n******** END ********\n"
      );

      if (!excludedUrls.some((endpoint) => url.endsWith(endpoint))) {
        toast.success(result.data.message || "Request successful");
      }

      return { data: result.data };
    } catch (err) {
      console.error(
        "\nres-status: " + err.response?.status,
        "\nres-data: " + JSON.stringify(err.response?.data) || err.message,
        "\n******** END ********\n"
      );

      if (err.response?.status === 401) {
        store.dispatch(logoutUser());
      }

      toast.error(
        err.response?.data?.message || err.message || GENERAL_API_ERR_MSG
      );

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

export default axiosBaseQuery;
