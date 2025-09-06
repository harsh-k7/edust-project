# EDUST Smart Waste Management System

## Overview

EDUST is a comprehensive IoT-enabled waste management solution designed for municipalities. The system provides real-time monitoring of waste bin fill levels, AI-powered predictions for waste collection optimization, and route planning capabilities. The application features both administrative dashboards for management oversight and mobile interfaces optimized for field workers and drivers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Component-based UI with type safety for better maintainability
- **Vite**: Modern build tool for fast development and optimized production builds
- **shadcn/ui**: Consistent design system built on Radix UI primitives and Tailwind CSS
- **TanStack Query**: Robust data fetching, caching, and synchronization
- **Wouter**: Lightweight client-side routing
- **WebSocket Integration**: Real-time updates for live bin status monitoring

### Backend Architecture
- **Node.js + Express**: RESTful API server with middleware support
- **In-Memory Storage**: Current implementation uses memory-based data storage with full CRUD operations
- **WebSocket Server**: Enables real-time communication between server and connected clients
- **Modular Services**: Separated concerns for IoT integration and AI service communication

### Data Layer
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Schema Design**: Structured entities for users, bins, drivers, routes, alerts, and activities
- **Migration Support**: Database versioning through Drizzle Kit

### IoT Integration
- **Blynk Cloud API**: Automated data synchronization every 2 minutes for bin fill levels
- **Real-time Monitoring**: Continuous tracking of bin status with automated alert generation
- **GPS Tracking**: Location-based services for bin positioning and driver tracking

### AI Service Layer
- **Python + Flask**: Microservice architecture for machine learning operations
- **Prediction Models**: Linear regression for waste fill time predictions
- **Route Optimization**: Traveling salesman problem solving using nearest-neighbor algorithm
- **Anomaly Detection**: Pattern recognition for unusual waste generation patterns

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL store
- **Role-based Access**: Admin and driver user roles with appropriate permissions

## External Dependencies

### Core Frameworks
- **React 18**: Frontend UI framework with hooks and modern patterns
- **Express.js**: Web application framework for Node.js
- **Flask**: Python web framework for AI service microservice

### Database & ORM
- **PostgreSQL**: Primary database (configured via Drizzle but may need setup)
- **Neon Database**: Serverless PostgreSQL provider integration
- **Drizzle ORM**: Type-safe database operations and migrations

### IoT Platform
- **Blynk Cloud**: IoT platform for hardware device communication and data collection

### UI Components & Styling
- **Radix UI**: Headless component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: React charting library for data visualization
- **Lucide React**: Icon library

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for type safety

### Real-time Communication
- **WebSocket (ws)**: Real-time bidirectional communication
- **Socket connections**: Live updates for bin status and alerts

### AI/ML Libraries
- **scikit-learn**: Machine learning algorithms for predictions
- **NumPy**: Numerical computing for data processing
- **Pandas**: Data manipulation and analysis

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler
- **Vite**: Development server and build tool