# Task 1

### Option 1 - Relational database (PostgreSQL)

The first option would be a relational database, where a product model would have relations with other models such as `brand`, `size` and `category`.

Organising data in such a manner makes it easier to query data based on this relations and certainly is a very important feature, since a user would very likely want to query products based on those parameters.

Also, the transactional capability of relational databases, specially for stock data is very important to ensure data consistency and prevent a product that no longer is available to be sold.

Some of the downsides is that data typing is a strong constraint, so storing multiple types of data for a single value (such as the size, for example) is not possible.

 Another downside is the need to migrate the database everytime the model evolves (as said to happen in warehouse service), which have an impact on the availability of the service, specially if the database is large.

 Sharding data in multiple servers is also a challenge if you want to keep performance and data consistency due to the relations.

 ```sql
CREATE TABLE product (
    sku VARCHAR(255) UNIQUE PRIMARY KEY NOT NULL,
    price DOUBLE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    product_image_url VARCHAR(255) NOT NULL,
    special_price DOUBLE
);

CREATE TABLE size (
    id UUID UNIQUE PRIMARY KEY NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE brand (
    id UUID UNIQUE PRIMARY KEY NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    id UUID UNIQUE PRIMARY KEY NOT NULL,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE product_size (
    product_id INT NOT NULL,
    size_id INT NOT NULL,
    PRIMARY KEY(user_id, size_id)
);

CREATE TABLE product_category (
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(user_id, category_id)
);

ALTER TABLE product_size ADD FOREIGN KEY (product_id) REFERENCES product(sku);
ALTER TABLE product_size ADD FOREIGN KEY (size_id) REFERENCES size(id);

ALTER TABLE product_category ADD FOREIGN KEY (product_id) REFERENCES product(sku);
ALTER TABLE product_category ADD FOREIGN KEY (category_id) REFERENCES category(id);

ALTER TABLE product ADD FOREIGN KEY (brand_id) REFERENCES brand(id);
 ```


### Option 2

The second option would be to use to use a NoSQL database (which I have never used, so I know the benefits only in theory)

One of the main advantages is much less structured data requirement. In our specific case it would be possible to have a data field, such as `size` with a mixed data type.

It would also allow to store all product's detail into a single document, thus making it far more easy when creating a new product, because there would be no need to worry about checking if a brand, category or size exist, creating them and then adding a reference when creating a product.

This flexibility however may mean also some downsides for the uses, because it would be much slower to query for those filtering elements through all different products.


-----------------------------

# Task 2

The backends have been developed using a Node.JS framework called Loopback, which is a very fast way fo bootstraping APIs.

I haven't has the time to setup a Vagrant or Docker environment for you guys to test, but the framework uses an "in-memory" databse.

The model definition can be found in the file `warehouse/model/product.json` and the custom validators for `product_image_url` and `size` in the file `warehouse/model/product.js`

### How to validate the filter:

1. Open a terminal, and inside `product-catalog` run the command `yarn` to install all dependencies
2. folder run the command `yarn start:warehouse`
3. This will start a server on `http://localhost:3030`
4. You can access the full API documentation on `http://localhost:3030/explorer`, where it's possible to test every route.
5. If you'd rather use something like Postman, you can access the api at the route `http://localhost:3030/api/products`
6. You can add new products either unitarily or by batch, such as described in the documentation
7. If some of the product's fields is missing or the format is not correct, you'll see a proper error message
8. If trying to insert by batch, the products without error are added and just those which contain errors blocked

You may try to insert by the following example (I corrected the example you gave, because the fields `price` and `special_price` are numbers and not strings):

```json
[
    {
      "sku": "BATMAN-123",
      "price": 122.99,
      "name": "Batmobile",
      "description": "Superhero Car",
      "size": ["V8", "V12", "V16"],
      "brand": "Bruce Wayne",
      "categories": ["Super Heroes", "Flying Cars", "Cars"],
      "product_image_url": "cdn.gfg.com.br/batmobile.jpg",
      "special_price": 11.22
    },
    {
      "sku": "SPD-99",
      "price": 1992.99,
      "name": "Spiderman Suit",
      "description": "Fancy suit for Spidermen",
      "size": ["34", "35"],
      "brand": "Peter Parker",
      "categories": ["Super Heroes", "Spiderman", "Clothes"],
      "product_image_url": "http://cdn.gfg.com.br/spider-suite.jpg"
    },
    {
      "sku": "KRYPT-123",
      "price": 122.99,
      "name": "Kryptonite",
      "description": "Anti Superman material",
      "size": ["22", "23", "24"],
      "brand": "Lex Luthor",
      "categories": ["Super Heroes", "Superman", "Accessories"],
      "product_image_url": "http://cdn.gfg.com.br/kryptonite.jpg",
      "special_price": 0.99
    },
    {
      "sku": "BATMAN-001",
      "price": 12323.99,
      "name": "Batman Suit",
      "description": "Comfortable Suit for hunt evil criminals",
      "size": ["38", "39", "40", "41"],
      "brand": "Bruce Wayne",
      "categories": ["Super Heroes", "Clothes", "Batman"],
      "product_image_url": "I am not an URL"
    },
    {
      "sku": "SPD-334",
      "price": 1.99,
      "name": "Spidernet refill set",
      "description": "To refill your net capabilities",
      "size": "single",
      "brand": "Peter Parker",
      "categories": ["Super Heroes", "Spiderman", "Accessories"],
      "product_image_url": "http://cdn.gfg.com.br/spiderman/spidernet.jpg",
      "special_price": 1
    }
]
```

You should see an error for the product that contains the `product_image_url: I am not an URL`. The other 4 elements have been inserted successfully into the database.

-----------------------------------------

# Task 3

In order to diminish failures in production, it would be interesting to use something like NGINX to load-balance the traffic between at least two servers to ensure service availability for all users. For the database, it would be interesting to replicate data in another database following a master-slave procedure.

On the frontend side, it's important to let the user know of any activity the app is doing using for example loaders as well as errors messages. In case of failure it be good as well to automatically retry or invite the user to come back another time.

-----------------------------------------

# Task X

I built both warehouse and stock webservices and a very simple frontend with React + React-Router + Redux

1. Open a terminal tab and run the `yarn` to install all backend dependencies
2. Run `yarn start:warehouse` to start the server on port *3030*
3. Insert some data into the warehouse database
4. Open a new tab and run `yarn start:stock` to start the server on port *3050* 
5. Insert some data into the stock database
6. Open a new terminal tab and run `yarn start:client`. It will install all frontend dependencies and start the frontend project on port *3000*
7. If you've inserted data into both databases you should be able to:
    - See a list of all products in the database
    - Click on elements of this list and be redirected the page which contains the details about the product
    - Click on the available sizes and see an alert letting you know if this product exist in stock, the quantity and the warehouse

**TODO**:
- Put all logic into the reducers
- Externalize api calls into a service
- Use `redux-saga` to manage async calls 


