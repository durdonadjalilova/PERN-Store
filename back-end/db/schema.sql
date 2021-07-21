DROP DATABASE IF EXISTS shoeStore_dev;
CREATE DATABASE shoeStore_dev;

\c shoeStore_dev;

CREATE TABLE shoes (
    id SERIAL PRIMARY KEY, 
    brand TEXT NOT NULL,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    price NUMERIC NOT NULL,
    size NUMERIC NOT NULL,
    gender TEXT NOT NULL
);