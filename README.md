# Test Node.js API

A simple Express.js API for testing deployment on various hosting platforms.

## 🚀 Endpoints

- `GET /` - Welcome message with timestamp
- `GET /api/health` - Health check with uptime and memory stats
- `GET /api/test` - Test endpoint with random data
- `POST /api/echo` - Echo back the request body

## 📦 Installation

```bash
npm install
```

## 🏃 Run Locally

```bash
npm start
```

The API will run on `http://localhost:3000`

## 🌐 Deploy

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Railway
1. Push to GitHub
2. Create new project from GitHub repo
3. Deploy automatically

### Render
1. Push to GitHub
2. Create new Web Service
3. Connect GitHub repo
4. Deploy

## 🧪 Test Endpoints

```bash
# Health check
curl http://localhost:3000/api/health

# Test endpoint
curl http://localhost:3000/api/test

# Echo POST
curl -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## 📝 Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
