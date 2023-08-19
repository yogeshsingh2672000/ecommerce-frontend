import axios from "axios";

const getData = async () => {
  const data = await axios.get("http://localhost:3003/api/product/all");
  return data.data;
};

export { getData };
