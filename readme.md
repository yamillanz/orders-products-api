# APP orders-products-api

#### challenge code

## Api's avaibled

- Users:
  - GET: http://localhost:3005/api/v1/users/
  - GET: http://localhost:3005/api/v1/users/{idUser}
- Orders:
  - GET: http://localhost:3005/api/v1/orders/
  - GET: http://localhost:3005/api/v1/orders/{idOrder}
  - POST: http://localhost:3005/api/v1/orders
    ```sh
        {
        	"idUser": 2,
        	"orderNumber": 122,
        	"dateTime": "2022-04-07",
        	"providerName": "pepito",
        	"totalValue" : 56.8,
        	"status": 1
        }
    ```
  - DELETE: http://localhost:3005/api/v1/orders/{idOrder}
  - PUT: http://localhost:3005/api/v1/orders/{idOrder}
    ```sh
        {
        	"idUser": 2,
        	"observation": "este se updateo 4"
        }
    ```
- Products:
  - GET: http://localhost:3005/api/v1/products/
  - GET: http://localhost:3005/api/v1/products/{idProducts}
  - POST: http://localhost:3005/api/v1/products
    ```sh
      {
          "idOrder": 15,
          "valueUnit": 34.5,
          "descriptionProd": "pelota",
          "unit": "kg",
          "quantity": 325,
          "qtyBox": 12,
          "status": 0
      }
    ```
  - DELETE: http://localhost:3005/api/v1/products/{idProduct}
  - PUT: http://localhost:3005/api/v1/products/{idProduct}
    ```sh
    {
      	"idOrder": 4,
    	"quantity": 122,
      "qtyBox": 222,
      "valueUnit": 34,
      "descriptionProd": "taquete"
    }
    ```
