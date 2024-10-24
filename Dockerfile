# Use a lightweight Node.js image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Write a simple web server in Node.js
RUN echo "\
const http = require('http');\n\
const port = 8080;\n\
const server = http.createServer((req, res) => {\n\
    res.statusCode = 200;\n\
    res.setHeader('Content-Type', 'text/plain');\n\
    res.end('Hello, World from Node.js!\\n');\n\
});\n\
server.listen(port, () => {\n\
    console.log(`Server running at http://0.0.0.0:${port}/`);\n\
});\n\
" > server.js

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the Node.js app when the container launches
CMD ["node", "server.js"]
