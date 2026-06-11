<div align="center">

<img src="https://img.shields.io/badge/MERN-Stack-00D4AA?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/React-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-000000?style=for-the-badge&logo=vercel&logoColor=white" />

# 📈 Zerodha Trading Platform (MERN Stack)

**A full-stack trading platform inspired by Zerodha, built using the MERN stack.
It allows users to authenticate, trade stocks (buy/sell), manage portfolios, and analyze performance through a modern UI and scalable backend.**

</div>

---

## 🚀 Live Demo

| Application | URL | Description |
|---|---|---|
| 🌐 Frontend | [zerodha-portal-app.vercel.app](https://zerodha-portal-app.vercel.app/) | Login, Signup, landing page|
| 📊 Dashboard App | [zerodha-trade-dashboard.vercel.app](https://zerodha-trade-dashboard.vercel.app/) | Portfolio, Holdings, P&L, Buy/Sell stocks |
| 🔗 Backend | [zerodha-backend-4z51.onrender.com](https://zerodha-backend-4z51.onrender.com/) | Centralized Express.js backend |

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based login and signup with secure token issuance
- Cross-platform token sharing between Portal and Dashboard via `localStorage`
- Protected routes — unauthenticated access redirects to login
- Joi schema validation on all incoming API request bodies

### 📊 Trading Engine
- **Buy & Sell stocks** with real-time quantity and price input
- Holdings update immediately after trade execution
- Trade history reflected in portfolio state on next render cycle

### 💼 Portfolio & Holdings
- Live holdings table with current quantity, average buy price, and current value
- Dynamic **P&L calculation** (absolute and percentage) per stock and overall
- Net portfolio value computed and displayed on every session load

### 📈 Analytics & Charts
- Interactive charts powered by **Chart.js**
- Visual breakdowns of portfolio allocation and performance trends
- Analytics modal for stock-level view

### ⚙️ Backend & API
- RESTful API with clean MVC architecture
- Centralized error handling middleware
- Input validation via Joi on all mutation routes
- MongoDB Atlas for persistent cloud data storage

---

## 🛠 Tech Stack

### Frontend (Portal + Dashboard)
| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework with fast HMR build tooling |
| React Router v6 | Client-side routing and protected route guards |
| Axios | HTTP client with interceptors for auth headers |
| Chart.js | Interactive data visualization |
| Context API | Global state management and session-wide refresh |
| CSS Modules & Bootstrap | Component-scoped styling |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API server |
| MongoDB + Mongoose | Document store with schema-enforced ODM |
| JSON Web Token (JWT) | Stateless authentication |
| Joi | Request body validation |
| dotenv | Environment variable management |
| CORS | Configured cross-origin policy for multi-app access |

### Infrastructure
| Service | Role |
|---|---|
| Vercel | Hosts Portal and Dashboard (separate deployments) |
| Render | Hosts Express API server |
| MongoDB Atlas | Managed cloud database cluster |

---

## 🏗 System Architecture

This project follows a multi-frontend architecture:

Frontend (Portal App) → Login, Signup, landing page
Dashboard App → Portfolio, Holdings, Analytics, Buy/Sell

Both applications are independent React apps deployed separately and connected to a single backend API.

---

## 🔐 Cross-Platform Authentication

This is one of the most technically significant design decisions in the project.

### The Problem
The Portal App and Dashboard App are **entirely separate React applications** deployed to different Vercel domains. Standard session-based auth doesn't work across origins. A naive implementation would require users to log in twice — once per app.

### The Solution: Shared JWT via localStorage
When a user logs in via the Portal App:

1. The backend validates credentials and returns a signed **JWT**.
2. The Portal stores this token in `localStorage` under a consistent key (e.g., `jwtToken`).
3. When the user navigates to the Dashboard (or opens it directly), the Dashboard reads the **same token from `localStorage`**.
4. Every API request from either app attaches the token via an `Authorization: Bearer <token>` header using Axios interceptors.
5. The backend's **JWT middleware** verifies the token on every protected route — it does not care which frontend sent the request.

> ⚠️ **Production note:** In a production system, `httpOnly` cookies scoped to the API domain or a token relay service would be preferred over `localStorage` to mitigate XSS risks. This implementation prioritises architectural clarity and cross-origin compatibility for a portfolio context.

---

## 🚦 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas URI
- npm 

### 1. Clone the repository
```bash
git clone https://github.com/Mandeep-Parmar/zerodha.git
cd zerodha-clone
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file:
```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
```

```bash
npm start
```

### 3. Frontend (Portal) setup
```bash
cd frontend
npm install
```

Create a `.env` file:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_DASHBOARD_URL=http://localhost:5174
```

```bash
npm run dev
```

### 4. Dashboard setup
```bash
cd dashboard
npm install
```

Create a `.env` file:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_FRONTEND_URL=http://localhost:5173
VITE_DASHBOARD_URL=http://localhost:5174
```

```bash
npm run dev
```

---

## 👤 Author

**Mandeep Parmar**
MERN-Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mandeep-Parmar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mandeep-p-b44930327/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mandeeppar07@gmail.com)

---

<div align="center">

⭐ If this project helped you or impressed you, consider giving it a star.

**Built with intention. Deployed with confidence.**

</div>
