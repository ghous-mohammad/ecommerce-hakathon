CREATE TABLE IF NOT EXISTS cartData (

    id SERIAL ,
    user_id varchar(255) NOT NULL,
    product_id varchar(255) Not NULL,
    product_title varchar(255) Not NULL,
    product_price init Not NULL,
    product_quantity init NOT NULL,
    image_url text NOT NULL

)


ALTER TABLE data 
ADD CONSTRAINT UNIQUENESS UNIQUE(

    product_id
;)
