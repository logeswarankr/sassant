import express from 'express';
import inventoryRoutes from './routes/inventoryRoutes.js';

const app = express();

app.use(express.json());

app.use('/inventory', inventoryRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Inventory Sync Service running on port ${PORT}`);
});
