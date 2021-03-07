# API Spec

## Authentication

All API must use this authentication

Request :

- Header
  - Api-Key : "your secret api key"

## Create Category

Request :

- Method : POST
- Endpoint : `/api/categories`
- Header
  - Content-Type : applicatication/json
  - Accept: application/json
- Body :

```json
{
    "name": "string"
}
```

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "category_id": "number, unique",
        "name": "string"
    }
}
```

## Get Category

Request :

- Method : GET
- Endpoint : `/api/categories/{category_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "category_id": "number, unique",
        "name": "string"
    }
}
```

## Get All Category

Request :

- Method : GET
- Endpoint : `/api/categories`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": [
        {
            "category_id": "string, unique",
            "name": "string"
        }
    ]
}
```

### Update Category

Request :

- Method : PUT
- Endpoint : `/api/categories/{category_id}`
- Header
  - Content-Type : applicatication/json
  - Accept: application/json
- Body :

```json
{
    "name": "string"
}
```

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "category_id": "number, unique",
        "name": "string"
    }
}
```

### Delete Category

Request :

- Method : DELETE
- Endpoint : `/api/categories/{category_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "category_id": "number, unique",
        "name": "string"
    }
}
```

## Create Question

Request :

- Method : POST
- Endpoint : `/api/questions`
- Header
  - Content-Type : applicatication/json
  - Accept: application/json
- Body :

```json
{
    "category_id": "number, unique",
    "question": "string",
    "answers": [
        {
            "answer": "string",
            "is_corrent": "boolean"
        }
    ]
}
```

## Get Question

Request :

- Method : GET
- Endpoint : `/api/questrions/{question_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "question_id": "number, unique",
        "question": "string",
        "answers": [
            {
                "answer": "string",
                "is_corrent": "boolean"
            }
        ]
    }
}
```

## Get All Question

Request :

- Method : GET
- Endpoint : `/api/questions`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": [
        {
            "question_id": "number, unique",
            "question": "string",
            "answers": [
                {
                    "answer": "string",
                    "is_corrent": "boolean"
                }
            ]
        }
    ]
}
```

## Update Question

Request :

- Method : POST
- Endpoint : `/api/questions/{question_id}`
- Header
  - Content-Type : applicatication/json
  - Accept: application/json
- Body :

```json
{
    "category_id": "number, unique",
    "question": "string",
    "answers": [
        {
            "answer": "string",
            "is_corrent": "boolean"
        }
    ]
}
```

### Delete Question

Request :

- Method : DELETE
- Endpoint : `/api/questions/{question_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "category_id": "number, unique",
    "question": "string",
    "answers": [
        {
            "answer": "string",
            "is_corrent": "boolean"
        }
    ]
}
```
