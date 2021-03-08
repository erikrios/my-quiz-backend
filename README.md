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
        "id": "number, unique",
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
        "id": "number, unique",
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
            "id": "string, unique",
            "name": "string"
        }
    ]
}
```

## Update Category

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
    "data": "string"
}
```

## Delete Category

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
    "data": "string"
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
    "question": "string",
    "answers": [
        {
            "answer": "string",
            "isCorrect": "boolean"
        }
    ]
}
```

## Get Question

Request :

- Method : GET
- Endpoint : `/api/questions/{question_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": {
        "questionId": "number, unique",
        "question": "string",
        "answers": [
            {
                "answer": "string",
                "isCorrent": "boolean"
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
            "questionId": "number, unique",
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
    "categoryId": "number, unique",
    "question": "string",
    "answers": [
        {
            "answer": "string",
            "isCorrent": "boolean"
        }
    ]
}
```

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": "string"
}
```

## Delete Question

Request :

- Method : DELETE
- Endpoint : `/api/questions/{question_id}`
- Header
  - Accept: application/json

Response :

```json
{
    "status": "string",
    "message": "string",
    "data": "string"
}
```
