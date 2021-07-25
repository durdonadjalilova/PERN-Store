DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
    id SERIAL PRIMARY KEY, 
    brand TEXT NOT NULL,
    name TEXT NOT NULL,
    image_url TEXT,
    price NUMERIC NOT NULL,
    size NUMERIC NOT NULL,
    gender TEXT NOT NULL
);