import axios from 'axios';

const baseUrl = '/api/bills';

const getAllBills = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching bills:', error);
    throw error;
  }
};

const getBillById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bill by ID:', error);
    throw error;
  }
};

const createBill = async (bill) => {
  try {
    const response = await axios.post(baseUrl, bill);
    return response.data;
  } catch (error) {
    console.error('Error creating bill:', error);
    throw error;
  }
};

const updateBill = async (id, billDetails) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, billDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating bill:', error);
    throw error;
  }
};

const deleteBill = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error('Error deleting bill:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const billService = {
  getAllBills,
  getBillById,
  createBill,
  updateBill,
  deleteBill,
  // Add other CRUD operations
};

export default billService;
