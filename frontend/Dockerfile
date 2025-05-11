FROM node:18-alpine

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build with env variable
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
