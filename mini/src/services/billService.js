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

const createBill = async (newBill) => {
  try {
    const response = await axios.post(baseUrl, newBill);
    return response.data;
  } catch (error) {
    console.error('Error creating bill:', error);
    throw error;
  }
};

// Add other CRUD operations as needed

const billService = {
  getAllBills,
  createBill,
  // Add other CRUD operations
};

export default billService;
