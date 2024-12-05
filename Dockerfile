# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /kaur_samanpreet_final_site

# Copy the package.json file and package-lock.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of app's source code from  host to image filesystem.
COPY . .

# Build the app
RUN npm run build

# Install http-server to serve the build folder
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 5575

# Serve the app using http-server
CMD ["http-server", "build", "-p", "5575"]
