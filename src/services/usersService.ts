import axios from 'axios';
import { endpoints } from './api';

export const fetchPatients = async () => {
  try {
    const response = await axios.get(endpoints.users);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
