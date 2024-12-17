import axios from 'axios';

const AMAZON_API_BASE = 'https://amazon.example.com'; 
export const syncToAmazon = async (sku, quantity) => {
    const response = await axios.post(`${AMAZON_API_BASE}/inventory/update`, {
        sku,
        quantity
    });
    return response.data;
};

export const fetchFromAmazon = async () => {
    const response = await axios.get(`${AMAZON_API_BASE}/inventory/updates`);
    return response.data;
};
