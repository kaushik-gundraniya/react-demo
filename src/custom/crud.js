import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:8000/";

const headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
};

export const getList = async (url) => {
  try {
    const res = await axios.get(API_URL + url, {
      headers: headers,
    });

    return res.data;
  } catch (err) {
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const createData = async (url, data) => {
  const response = await axios.post(API_URL + url, data);
  return response.data;
};

export const updateData = async (url, data) => {
  const response = await axios.put(API_URL + url, data);
  return response.data;
};

export const deletedata = async (url) => {
  const response = await axios.delete(API_URL + url);
  return response.data;
};
