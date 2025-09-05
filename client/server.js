const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(`[INFO] ${new Date().toISOString()} - Incoming request: ${req.method} ${req.url}`);
    console.log(`[INFO] User-Agent: ${req.headers['user-agent'] || 'unknown'}`);
    console.log('[INFO] Processing request...');

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            console.error(`[ERROR] ${new Date().toISOString()} - Failed to read index.html:`, err.message);
            console.error('[ERROR] Stack trace:', err.stack);
            console.error('[ERROR] This is a critical file read error!');

            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error loading page.');
        } else {
            console.log(`[SUCCESS] File loaded successfully, size: ${data.length} bytes`);
            console.log('[INFO] Sending response to client');

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });

    if (!req.headers['user-agent']) {
        console.warn('[WARN] Request received without User-Agent header - possible bot or curl');
    }

    if (req.url.includes('favicon.ico')) {
        console.warn('[WARN] Favicon request detected - this might fail');
    }
});

// ⏳ Delay startup by 10 seconds
setTimeout(() => {
    server.listen(port, () => {
        console.log(`[STARTUP] Server starting at ${new Date().toISOString()}`);
        console.log(`[STARTUP] Server running at http://0.0.0.0:${port}`);
        console.log('[STARTUP] Galaxy Impact - Enhanced Logging Test');
        console.log('[INFO] Waiting for connections...');
    });
}, 10000); // 10 seconds = 10000ms

// Periodic logs
setInterval(() => {
    console.log(`[HEARTBEAT] ${new Date().toISOString()} - Server is alive`);
}, 30000);

// Simulated background errors
setInterval(() => {
    if (Math.random() > 0.8) {
        console.error('[ERROR] Simulated background error - database connection timeout');
        console.error('[ERROR] This should be visible in your enhanced logging system');
    }
    if (Math.random() > 0.9) {
        console.warn('[WARN] High memory usage detected - consider optimization');
    }
}, 45000);

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('[SHUTDOWN] Received SIGTERM, shutting down gracefully');
    server.close(() => {
        console.log('[SHUTDOWN] Server closed');
        process.exit(0);
    });
});

// Fatal crash handler
process.on('uncaughtException', (err) => {
    console.error('[FATAL] Uncaught exception:', err.message);
    console.error('[FATAL] Stack:', err.stack);
    process.exit(1);
});
