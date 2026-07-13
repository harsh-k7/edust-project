# EDUST - Smart Waste Processor

EDUST is a comprehensive, intelligent waste management ecosystem that connects a smart hardware bin (ESP32) with a modern web dashboard and backend.

## 📁 Repository Structure

- **`/frontend`**: The React + Vite user interface for monitoring bins.
- **`/backend`**: The Node.js + Express backend API.
- **`/firmware`**: The ESP32 C++ PlatformIO code for the smart bin.
- **`/assets`**: Contains 3D models (`model1.glb`) and demo HTML files.

---

## 🛠️ 1. Firmware Setup (ESP32)

The firmware is located in the `/firmware` directory. It uses ultrasonic sensors to detect waste levels and sends data to Blynk. It features advanced auto-reconnection logic and median-filtering for sensor noise reduction.

### Getting Started:
1. Open the `/firmware` folder in VS Code with the **PlatformIO** extension.
2. Edit `include/Config.h`:
   - Set your `WIFI_SSID` and `WIFI_PASS`.
   - Set your `BLYNK_TEMPLATE_ID`, `BLYNK_TEMPLATE_NAME`, and `BLYNK_AUTH_TOKEN`.
3. Connect your ESP32 via USB and click **Upload** in PlatformIO.

---

## 🖥️ 2. Frontend Setup (React)

The frontend is a React application built with Vite, located in `/frontend`.

### Getting Started:
1. Open a terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## ⚙️ 3. Backend Setup (Node.js)

The backend provides the REST API and authentication, located in `/backend`.

### Getting Started:
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `/backend` with the following:
   ```env
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing & License
Built by Team FUTURION.
MIT License
