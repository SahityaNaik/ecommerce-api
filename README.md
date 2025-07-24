# 🛒 E-Commerce API + React Frontend

A full-stack e-commerce web application.  
Includes a **Node.js + Express** backend with **MongoDB** and **JWT-based role authentication**, and a **React + Vite** frontend for a simple shopping experience: browse products, manage cart, and place orders.

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Frontend**: React, Axios, Vite
- **Authentication**: Role-based JWT (Admin & Customer)
- **Tools Used**: Thunder Client, Postman, VS Code

---

## 🚀 Features

### Backend
- User registration & login with JWT
- Role-based access control (admin/customer)
- Product CRUD for admins
- Customer-only cart management
- Order creation API

### Frontend
- View all available products
- Add products to cart
- View cart and total price
- Place orders via frontend
- Axios integration for secure API calls

---

## 👤 Sample Users

These users can be used for testing login functionality:

```json
// 🔐 Admin
{
  "username": "admin1",
  "password": "pass123"
}

// 👤 Customer
{
  "username": "customer2",
  "password": "pass123"
}
```

## 📁 Project Structure

```
/ecommerce-api-project
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── vite.config.js
│
├── screenshots/
│   ├── product-list.png
│   └── cart-view.png
└── README.md
```
