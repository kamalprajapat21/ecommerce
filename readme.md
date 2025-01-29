# MERN Stack Application

This is a simple MERN (MongoDB, Express, React, Node.js) full-stack application.

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/codendevelop/ecommerce
cd mern-app
```

### 2. Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file inside the `backend` folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### Start the Backend Server
```sh
npm start
```
> The backend should now be running on `http://localhost:5000`

### 3. Frontend Setup
```sh
cd ../frontend
npm install
```

#### Add Proxy to `frontend/package.json` (already included)
```json
"proxy": "http://localhost:5000"
```

#### Start the Frontend Server
```sh
npm start
```
> The frontend should now be running on `http://localhost:3000`

## Usage
- Open `http://localhost:3000` in your browser.
- The frontend communicates with the backend via the proxy.
- Modify the code to add features as needed.

## Folder Structure
```
mern-app/
├── backend/      # Node.js + Express + MongoDB API
│   ├── server.js # Main server file
│   ├── .env      # Environment variables
│   ├── package.json
├── frontend/     # React application
│   ├── src/
│   ├── package.json
├── README.md
```

## Contributing
Feel free to submit a pull request or open an issue for improvements.

## License
This project is licensed under the MIT License.