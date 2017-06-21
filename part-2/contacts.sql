DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255),
phone VARCHAR,
street VARCHAR(255),
city VARCHAR,
state VARCHAR, 
country VARCHAR,
zip INTEGER,
birthday INTEGER,
website VARCHAR
);

insert into contacts (name, email, phone, street, city, state, country, zip, birthday, website) values ('Gael Broune', 'gbroune0@ebay.co.uk', '1-(650)685-6605', '0256 Clove Avenue', 'Redwood City', 'CA', 'United States', '94064', '2007-08-05 16:01:19', 'https://boston.com');
