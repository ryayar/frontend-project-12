import axios from 'axios';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

export const getData = async (url) => {
  try {
    const response = await axios.get(url, { headers: getAuthHeaders() });
    // TODO: remove later, only debug
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Ошибка загрузки данных');
  }
};
