# Use a lightweight Node.js image
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files to the container
COPY server.js /app
COPY index.html /app

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the Node.js app when the container launches
CMD ["node", "server.js"]
