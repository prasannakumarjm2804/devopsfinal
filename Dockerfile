# Stage 1: Build React frontend
FROM node:18-alpine as frontend
WORKDIR /app/frontend
COPY frontend/ .  # Ensure frontend exists in this path
RUN npm install && npm run build

# Stage 2: Setup backend
FROM node:18-alpine
WORKDIR /server

COPY backend/ /server/  # Copy backend code
COPY --from=frontend /app/frontend/build /server/public  # Copy frontend build to backend

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
