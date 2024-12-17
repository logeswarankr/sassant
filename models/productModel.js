import db from '../config/db.js';

export const getProducts = async () => {
    const [rows] = await db.query('SELECT * FROM Product');
    return rows;
};

export const updateProductQuantity = async (sku, quantity) => {
    await db.query('UPDATE Product SET QuantityOnHand = ? WHERE SKU = ?', [quantity, sku]);
};

export const insertProduct = async (product) => {
    const { sku, name, quantity, purchaseValue, vendorDetails } = product;
    await db.query(
        'INSERT INTO Product (SKU, Name, QuantityOnHand, PurchaseValue, VendorDetails) VALUES (?, ?, ?, ?, ?)',
        [sku, name, quantity, purchaseValue, JSON.stringify(vendorDetails)]
    );
};
