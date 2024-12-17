import { updateProductQuantity } from '../models/productModel.js';
import { synchronizeInventory } from '../services/syncService.js';
import { syncToAmazon } from '../services/amazonService.js';

export const syncInventoryToAmazon = async (req, res) => {
    const { sku, quantity } = req.body;
    try {
        await updateProductQuantity(sku, quantity);
        await syncToAmazon(sku, quantity);
        res.status(200).send({ message: 'Inventory synced to Amazon successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error syncing inventory to Amazon' });
    }
};

export const fetchAmazonUpdates = async (req, res) => {
    try {
        await synchronizeInventory();
        res.status(200).send({ message: 'Amazon updates synced to SaasAnt successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error fetching updates from Amazon' });
    }
};
