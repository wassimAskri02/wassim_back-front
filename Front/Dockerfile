# Stage 1: Build the Angular app
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/blogger /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
