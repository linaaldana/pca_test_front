# Use the official Node.js image as the base image
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Use a smaller, production-ready image as the final image
FROM nginx:1.17.8-alpine

RUN ls -alt

# Copy the production-ready Angular app to the Nginx webserver's root directory
COPY --from=build /usr/src/app/dist/pca_test_front/browser /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

