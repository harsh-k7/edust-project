# EDUST Smart Waste Management System

A comprehensive IoT-enabled waste management solution for municipalities with real-time monitoring, AI-powered predictions, and route optimization.

## 🌟 Features

- **Real-time IoT Integration**: Connects with Blynk Cloud API to monitor bin fill levels
- **Interactive Dashboard**: Admin interface with live maps, charts, and analytics
- **Mobile Driver Interface**: Optimized mobile dashboard for collection drivers
- **AI Predictions**: Machine learning models for predicting bin fill times and optimizing routes
- **WebSocket Updates**: Real-time data synchronization across all connected clients
- **Alert System**: Automated notifications for overflowing bins and sensor issues
- **Route Optimization**: AI-powered route planning for efficient waste collection

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Dashboard**: Comprehensive admin interface with metrics, maps, and controls
- **Driver Interface**: Mobile-optimized interface for field workers
- **Real-time Updates**: WebSocket integration for live data updates
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Backend (Node.js + Express)
- **REST API**: Complete CRUD operations for bins, drivers, routes, and alerts
- **IoT Integration**: Automated Blynk API synchronization every 2 minutes
- **WebSocket Server**: Real-time communication with frontend clients
- **Data Storage**: In-memory storage with full CRUD operations

### AI Service (Python + Flask)
- **Fill Prediction**: Linear regression models for predicting bin capacity
- **Route Optimization**: Nearest-neighbor TSP algorithm for efficient collection routes
- **Anomaly Detection**: Pattern recognition for unusual waste generation

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Python 3.8+
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edust-waste-management
   ```

2. **Install dependencies**
   ```bash
   # Install Node.js dependencies
   npm install
   
   # Install Python dependencies for AI service
   cd ai-service
   pip install -r requirements.txt
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env with your configuration
   # The Blynk token is pre-configured: pGyiSO3hcUVWNRGm_MWACXcFLnhRm09s
   ```

4. **Start the services**

   **Terminal 1 - Main Application:**
   ```bash
   npm run dev
   ```
   
   **Terminal 2 - AI Service:**
   ```bash
   cd ai-service
   python app.py
   ```

5. **Access the application**
   - Admin Dashboard: `http://localhost:5000`
   - Driver Interface: `http://localhost:5000/driver`
   - AI Service: `http://localhost:8001`

## 📱 Usage

### Admin Dashboard
- View real-time bin status on interactive map
- Monitor key metrics: total bins, collection needs, driver activity
- Manage alerts and assign drivers to urgent collections
- Analyze waste trends with historical charts
- Optimize collection routes with AI recommendations

### Driver Interface (Mobile)
- View assigned collection route and progress
- Navigate to next bin location
- Mark bins as collected upon completion
- Report issues and contact dispatch
- Real-time updates on route changes

### IoT Integration
- Automatic data sync with Blynk Cloud every 2 minutes
- Real-time fill level monitoring from ultrasonic sensors
- GPS tracking for mobile bins
- Offline detection and alerts

## 🔧 API Endpoints

### Bins Management
- `GET /api/bins` - Get all bins
- `POST /api/bins` - Create new bin
- `PUT /api/bins/:id` - Update bin status

### Driver Management
- `GET /api/drivers` - Get all drivers
- `POST /api/drivers` - Register new driver
- `PUT /api/drivers/:id` - Update driver status

### Routes & Optimization
- `GET /api/routes` - Get all routes
- `POST /api/routes` - Create new route
- `POST /api/ai/optimize-route` - AI route optimization

### Real-time Features
- `POST /api/sync-iot` - Manual IoT data sync
- `WebSocket /ws` - Real-time updates
- `GET /api/alerts` - Get active alerts

## 🤖 AI Features

### Predictive Analytics
- **Fill Time Prediction**: Estimates when bins will reach capacity
- **Pattern Recognition**: Identifies peak collection days and seasonal trends
- **Anomaly Detection**: Flags unusual fill patterns or sensor malfunctions

### Route Optimization
- **Distance Minimization**: Reduces total travel distance
- **Priority-based Routing**: Prioritizes critical/full bins
- **Time Estimation**: Provides accurate completion time estimates

## 🌐 IoT Configuration

The system is pre-configured to work with Blynk IoT platform:

- **Token**: `pGyiSO3hcUVWNRGm_MWACXcFLnhRm09s`
- **Pin V0**: Fill level percentage (0-100)
- **Pin V1**: GPS latitude
- **Pin V2**: GPS longitude

### Hardware Setup (ESP32 + Ultrasonic Sensor)
```cpp
// Blynk configuration
#define BLYNK_TEMPLATE_ID "your_template_id"
#define BLYNK_DEVICE_NAME "Waste Bin Sensor"
#define BLYNK_AUTH_TOKEN "pGyiSO3hcUVWNRGm_MWACXcFLnhRm09s"

// Send fill level to Blynk
Blynk.virtualWrite(V0, fillPercentage);
Blynk.virtualWrite(V1, gpsLat);
Blynk.virtualWrite(V2, gpsLng);
