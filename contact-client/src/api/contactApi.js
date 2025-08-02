import axios from "axios";

const API_URL = "http://127.0.0.1:4000/api"; // Your Node server

export const getContacts = () => axios.get(`${API_URL}/getContacts`); 
export const createContact = (data) => axios.post(`${API_URL}/contactSave`, data);
export const updateContact = (data) => axios.post(`${API_URL}/editContactData`, data);
export const deleteContact = (email) => axios.get(`${API_URL}/deleteContact/${email}`);
