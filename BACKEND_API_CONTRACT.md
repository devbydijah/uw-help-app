# BACKEND API CONTRACT

This document outlines the API endpoints required for the frontend of the UW Help App to interact with the backend. Each endpoint includes details about the URL, HTTP method, request body, response structure, and any additional notes.

---

## Authentication

### Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "token": "string",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Error**:
    ```json
    {
      "error": "Invalid credentials"
    }
    ```
  - **HTTP Status Codes**:
    - `200 OK`: Successful login.
    - `400 Bad Request`: Invalid request data.
    - `401 Unauthorized`: Invalid credentials.

### Register
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Error**:
    ```json
    {
      "error": "User already exists"
    }
    ```
  - **HTTP Status Codes**:
    - `201 Created`: Successful registration.
    - `400 Bad Request`: Invalid request data.

### Logout
- **URL**: `/api/auth/logout`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Successful logout.
    - `401 Unauthorized`: Invalid or missing token.

### Token Validation
- **URL**: `/api/auth/validate`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  - **Valid Token**:
    ```json
    {
      "valid": true,
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```
  - **Invalid Token**:
    ```json
    {
      "valid": false,
      "error": "Token expired or invalid"
    }
    ```
  - **HTTP Status Codes**:
    - `200 OK`: Token is valid.
    - `401 Unauthorized`: Token is invalid or expired.

---

## User Profile

### Get User Profile
- **URL**: `/api/user/profile`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "address": "string",
    "phoneNumber": "+234XXXXXXXXXX"
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Profile retrieved successfully.
    - `401 Unauthorized`: Invalid or missing token.

### Update User Profile
- **URL**: `/api/user/profile`
- **Method**: `PUT`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "address": "string",
    "phoneNumber": "+234XXXXXXXXXX"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Profile updated successfully"
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Profile updated successfully.
    - `400 Bad Request`: Invalid request data.
    - `401 Unauthorized`: Invalid or missing token.

---

## Notifications

### Get Notifications
- **URL**: `/api/notifications`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "notifications": [
      {
        "id": "string",
        "title": "string",
        "description": "string",
        "isRead": "boolean"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "totalItems": 100,
      "totalPages": 10
    }
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Notifications retrieved successfully.
    - `401 Unauthorized`: Invalid or missing token.

### Mark Notification as Read
- **URL**: `/api/notifications/:id/read`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Notification marked as read"
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Notification marked as read.
    - `404 Not Found`: Notification not found.

---

## Waste Management

### Get Waste Categories
- **URL**: `/api/waste/categories`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "id": "string",
      "name": "string"
    }
  ]
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Categories retrieved successfully.

### Schedule Waste Pickup
- **URL**: `/api/waste/pickup`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "categoryId": "string",
    "pickupDate": "YYYY-MM-DD",
    "pickupTime": "HH:mm",
    "address": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Waste pickup scheduled successfully"
  }
  ```
  - **HTTP Status Codes**:
    - `201 Created`: Pickup scheduled successfully.
    - `400 Bad Request`: Invalid request data.
    - `401 Unauthorized`: Invalid or missing token.

### Get Past Waste Pickups
- **URL**: `/api/waste/pickups`
- **Method**: `GET`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "pickups": [
      {
        "id": "string",
        "category": "string",
        "pickupDate": "YYYY-MM-DD",
        "pickupTime": "HH:mm",
        "status": "string"
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "totalItems": 50,
      "totalPages": 5
    }
  }
  ```
  - **HTTP Status Codes**:
    - `200 OK`: Pickups retrieved successfully.
    - `401 Unauthorized`: Invalid or missing token.

---

## Support

### Submit Support Request
- **URL**: `/api/support`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Request Body**:
  ```json
  {
    "subject": "string",
    "message": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Support request submitted successfully"
  }
  ```
  - **HTTP Status Codes**:
    - `201 Created`: Support request submitted successfully.
    - `400 Bad Request`: Invalid request data.
    - `401 Unauthorized`: Invalid or missing token.

---

## Notes for Backend Team

- **Authentication Flow**:
  - The frontend will store the `token` in `localStorage` or `cookies` for session management.
  - All protected routes will include the `Authorization` header with the token.

- **Error Handling**:
  - Use standard HTTP status codes (e.g., `401` for unauthorized, `400` for bad requests).
  - Provide clear error messages in the response body.

- **Security**:
  - Ensure all endpoints are served over HTTPS.
  - Use secure cookies for token storage if applicable.

- **Pagination**:
  - For list endpoints, include `page` and `pageSize` query parameters in requests.
  - Include `pagination` metadata in responses.

- **Versioning**:
  - Use URL-based versioning (e.g., `/api/v1/...`) to allow for future updates without breaking existing functionality.

- **Date and Time Formats**:
  - Use ISO 8601 format for all date and time fields (e.g., `YYYY-MM-DD` for dates, `HH:mm` for times).
