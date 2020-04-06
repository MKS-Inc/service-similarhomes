DROP DATABASE IF EXISTS abode;

CREATE DATABASE abode;

USE abode;

CREATE TABLE neighborhoods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (20) NOT NULL UNIQUE KEY,
    transit_score SMALLINT NOT NULL,
    walk_score SMALLINT NOT NULL,
    value_before_updated INT NOT NULL,
    value_after_updated INT NOT NULL,
    median_value INT NOT NULL
);
-- neighborhood VARCHAR (20) NOT NULL UNIQUE KEY,
    -- value_inc_dec_past INT NOT NULL,
    -- value_inc_dec_future INT NOT NULL,

CREATE TABLE houses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    neighborhood VARCHAR (20) NOT NULL FOREIGN KEY,
    cost INT NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms INT NOT NULL,
    address VARCHAR (30) NOT NULL,
    area_code INT NOT NULL,
    image VARCHAR (7) NOT NULL,
    -- heart_filled BOOLEAN DEFAULT false
);

-- sf INT NOT NULL,

    -- home_cost INT NOT NULL,
    -- home_address VARCHAR (30) NOT NULL,
    -- home_image VARCHAR (7) NOT NULL,