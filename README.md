# Tasks API

A simple RESTful API to manage a collection of tasks (to-do items) using Node.js and Express. This API supports basic CRUD (Create, Read, Update, Delete) operations and stores data in memory.

## Folder Structure
tasks-api/
├── app.js
├── package.json
├── controllers/
│ └── taskController.js
├── routes/
│ └── taskRoutes.js
└── models/
└── taskModel.js
## Endpoints

### GET /tasks
Retrieve a list of all tasks.
- **Response:**
  - `200 OK`
  - Example:
    ```json
    [
      {
        "id": 1,
        "title": "Task 1",
        "description": "Description 1"
      }
    ]
    ```

### GET /tasks/:id
Retrieve a specific task by ID.
- **Response:**
  - `200 OK`
  - `404 Not Found`
  - Example:
    ```json
    {
      "id": 1,
      "title": "Task 1",
      "description": "Description 1"
    }
    ```

### POST /tasks
Create a new task.
- **Request Body:**
  ```json
  {
    "title": "Task 1",
    "description": "Description 1"
  }


  # clone repository
  git clone https://github.com/rednet09/tasks-api.git
  cd tasks-api
  npm i
