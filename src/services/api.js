import axios from "axios";

const API_URL = "http://localhost:3000/leads";

export const getAllLeads = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const checkEmailExists = async (email) => {
  const response = await axios.get(`${API_URL}?email=${email}`);
  return response.data.length > 0;
};

export const createLead = async (lead) => {
  const exists = await checkEmailExists(lead.email);
  if (exists) {
    throw new Error("Email already exists");
  }
  const response = await axios.post(API_URL, lead);
  return response.data;
};

export const updateLeadStatus = async (id, status) => {
  const response = await axios.patch(`${API_URL}/${id}`, { status });
  return response.data;
};
