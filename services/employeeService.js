// services/employeeService.js
import axios from 'axios';

const API_URL = 'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d';

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
