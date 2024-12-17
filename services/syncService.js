import { fetchFromAmazon } from './amazonService.js';
import { updateProductQuantity } from '../models/productModel.js';

export const synchronizeInventory = async () => {
    const updates = await fetchFromAmazon();
    for (const update of updates) {
        const { sku, quantity } = update;
        await updateProductQuantity(sku, quantity);
    }
};
