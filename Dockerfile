# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages (if you have requirements.txt)
# RUN pip install --no-cache-dir -r requirements.txt

# Write the hello world script
RUN echo 'print("Hello, World!")' > hello.py

# Run the hello world script when the container launches
CMD ["python", "hello.py"]
