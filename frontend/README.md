<<<<<<< HEAD
# Smart Composting Backend

This is the backend API for the Smart Composting project, built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Register/Login)
- Product Management
- Shopping Cart
- Order Management
- Admin Dashboard

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT Authentication
- Express Validator

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create new product (Admin only)
- PUT /api/products/:id - Update product (Admin only)
- DELETE /api/products/:id - Delete product (Admin only)

### Cart
- GET /api/cart - Get user's cart
- POST /api/cart/add - Add item to cart
- PUT /api/cart/item/:productId - Update cart item
- DELETE /api/cart/item/:productId - Remove item from cart
- DELETE /api/cart/clear - Clear cart

### Orders
- GET /api/orders - Get user's orders
- POST /api/orders - Create new order
- GET /api/orders/:id - Get order by ID

## Development

```bash
# Run in development mode
npm run dev

# Build the project
npm run build

# Run in production mode
npm start

# Run tests
npm test
```

## License

MIT 
=======
# 🧠 EDUST – Smart Waste Processor (by FUTURION)

EDUST is a compact, intelligent waste processing system that detects, classifies, and handles organic and recyclable waste in real-time. Built for urban homes, offices, malls, and restaurants.

## 🚀 Features
- Automatic waste detection using IR + camera sensors
- AI-powered classification of waste (organic/recyclable)
- Organic waste composting chamber
- Recyclable shredding mechanism
- IoT-enabled dashboard (mobile/web)
- Real-time alerts and usage analytics

## 🔧 Tech Stack
- **Microcontroller:** ESP32 / Arduino
- **Sensors:** IR, moisture, temperature
- **AI:** Python, TensorFlow / Teachable Machine
- **App:** Flutter / Web Dashboard
- **IoT:** Firebase / MQTT
- **Build:** Laser-cut case, compost bin, filters, fan

## 🛠 Folder Structure
See folder tree above for modular code + hardware separation.

## 🤝 Team FUTURION
-harsh kumar
-kavya 
-kuldeep
-rishabh

## 📄 License
MIT License
>>>>>>> a2cd928613b173fb6312021d1c844a2f99a47869
