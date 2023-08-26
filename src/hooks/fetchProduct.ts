import axios from "axios";

const getData = async (page: number = 0) => {
  const data = await axios.get(
    `http://localhost:3003/api/product/all?page=${page}`
  );
  return data.data;
};

export { getData };
