CREATE DATABASE IF NOT EXISTS inventory_db;

USE inventory_db;
### Product Table
CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    SKU VARCHAR(50) UNIQUE NOT NULL,
    Name VARCHAR(100),
    QuantityOnHand INT,
    PurchaseValue DECIMAL(10, 2),
    VendorDetails JSON,
    LastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


