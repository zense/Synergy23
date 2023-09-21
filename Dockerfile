# Use an official Node.js runtime as the base image
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the production web server
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy the built app to the Nginx web server directory
COPY --from=build /app/build .

# Add the Nginx configuration file to handle client side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (HTTP) and port 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
