const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS for testing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Test Routes
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Test Node.js API is running!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

app.get('/api/test', (req, res) => {
    res.json({
        message: 'Test endpoint working!',
        data: {
            random: Math.random(),
            timestamp: Date.now()
        }
    });
});

app.post('/api/echo', (req, res) => {
    res.json({
        message: 'Echo endpoint',
        received: req.body,
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        path: req.path
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Test API running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});
