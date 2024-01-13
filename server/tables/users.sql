CREATE TABLE users(
    user_id serial  PRIMARY KEY
    password VARCHAR(50) NOT NULL
    email VARCHAR(100) UNIQUE NOT NULL
    created_on TIMESTAMP NOT NULL
    name VARCHAR(50) NOT NULL
)