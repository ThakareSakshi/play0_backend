# PlayO Backend

Base url: https://play0-backend.onrender.com/api

## Endpoints

#### POST /add

  To add new Customer in collection.
  
  url: https://play0-backend.onrender.com/api/add

  Body (raw json)
  ```
{
"product":"phone",
"customerName":"john",
"amount":11.23,
"paymentMode":"cash",
"trasactionStatus":"process",
"Date":"10/02/2024",
}

```

####   GET /get

  To get all the customers data.

  url: https://play0-backend.onrender.com/api/get

####  PATCH /update?id

To update customers data based on id Provided.

url: https://play0-backend.onrender.com/api/update?id="0840394"

#### DELETE /delete?id
  To delete the customers data based on id provided.
  
  url: https://play0-backend.onrender.com/api/delete?id="04950".




