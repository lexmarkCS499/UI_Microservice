# Step 1: Use an official Node.js image to build the app
FROM nginx:alpine

# Step 8: Copy the build output to the NGINX web root directory
COPY /uiservice /usr/share/nginx/html

# Step 9: Expose port 80 for the app
EXPOSE 80
