# 404 API Specification

### Base URL:
    `tbd`

## Endpoints

### User

#### Register new user - POST /user
Planned feature
#### Login - POST /login
Planned feature

#### View user dashboard - GET /user/{user_id}
Planned feature

#### Get user's task categories - GET /user/{user_id}/categories
- Response Body:
```json
{
    "categories": ["str"...]
}
```
#### Add user task category - POST /user/{user_id}/categories
- Request Body:
```json
{
    "name": "str"
}
```

### Task

#### Get today's tasks - GET /task/{user_id}
#### Get specific day's tasks - GET /task/{user_id}/{datetime}
- Response Body:
```json
{
    "tasks": [
        {
              "_id": "string",
              "name": "string",
              "userId": "string",
              "description": "string",
              "deadline": "string",
              "done": "boolean"
        }, ...
    ]
    }
```
#### Create new task - POST /task
- Request Body:
```json
{
    "name": "string",
    "description": "string",
    "userId": "string",
    "category": "enum",
    "priority": "string",
    "deadline": "datetime"
}
```
- Response Body:
```
Status 201
```
#### Update a task - PUT /task/{task_id}
- Response:
```
Status 200 & updated resource
```
    

#### Delete a task - DELETE /task/{task_id}
- Response:
```
Status 204
```
