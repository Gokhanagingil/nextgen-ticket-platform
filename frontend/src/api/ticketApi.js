import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const getTickets = async () => {
  const response = await axios.get(`${API_BASE}/tickets`);
  return response.data;
};

export const createTicket = async (ticketData) => {
  const response = await axios.post(`${API_BASE}/tickets`, ticketData);
  return response.data;
};