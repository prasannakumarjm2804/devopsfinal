# Build React frontend
FROM node:18-alpine as frontend
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install && npm run build

# Setup backend
FROM node:18-alpine
WORKDIR /server

# Copy backend and build frontend
COPY backend/ /server/
COPY --from=frontend /app/frontend/build /server/public

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
