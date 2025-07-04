#  WeatherCore

**WeatherCore** is a responsive, Auth0-secured React app that displays real-time weather data for multiple cities using the OpenWeatherMap API. The backend caches responses to improve performance.

---

## Features

- Auth0 Authentication (Login/Logout)
- Real-time weather data for cities
- Backend caching with Node.js + Express
- Fully responsive & mobile-friendly UI
- Error handling with user feedback
- Built with React, Tailwind CSS

---

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A [free Auth0 account](https://auth0.com/)
- A [free OpenWeatherMap API key](https://openweathermap.org/api)

---

## Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/anjana-madushan/weather_app.git
cd weather_app
```
### 2. Install Dependencies
frontend
```bash
cd frontend
npm install
```

backend
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
#### Backend (`backend/.env`)
PORT=3000
OPEN_WEATHER_MAP_URL=https://api.openweathermap.org/data/2.5/weather
API_KEY=your_openweathermap_api_key

#### Frontend (`frontend/.env`)
VITE_BACKEND_URL=http://localhost:3000
VITE_DOMAIN=your-auth0-domain
VITE_CLIENT_ID=your-auth0-client-id

### 4. Configure Open Weather App
- Log in to the open weather app select the relevent plan(Current weather and forecasts<=I used this service). 0
- Get your API key to add .env/backend file 

### 4. Configure Auth0 Application

In your [Auth0 Dashboard](https://manage.auth0.com/), configure your Single Page Web Application settings as follows:

- **Allowed Callback URLs:**  
  `http://localhost:5173/`

- **Allowed Logout URLs:**  
  `http://localhost:5173/`

- **Allowed Web Origins:**  
  `http://localhost:5173/`

Also copy Domain and Client Id values to add .env of the frontend 


### 5. Run the Project

#### backend
```bash
cd backend
npm start
```

#### frontend
```bash
cd frontend
npm start
```
## User Flow
### 1.Login

- Users land on the login screen powered by Auth0.

- If email is unverified, an error message (Please verify your email...) is shown.

- Once verified, users retry login and complete MFA (via email or authenticator app).

### 2.Dashboard

- After login, weather data is fetched from the backend.

- A loading message (Fetching weather data...) appears with animated dots.

- If an error occurs, it's shown clearly to the user.

### 3. Weather Cards

- Cities are displayed in responsive weather cards with info like:
City, Temp, Description, Humidity, Wind, Sunrise/Sunset.

### 4.Weather Details View

- a card shows a detailed view of weather info.

- A back arrow in the top-left returns users to the main card list.

### 5.Logout

- A "Log Out" button in the top logs the user out and redirects to the homepage.