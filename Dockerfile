# Use the the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
#FROM node:17-slim

# Create and change to the app directory.
#WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
#COPY package*.json ./

# Install production dependencies.
#RUN npm install --omit=dev

# Copy local code to the container image.
#COPY . ./

# Run the web service on container startup.
#CMD [ "npm", "start" ]

# Stage 1: Building the application
FROM node:17-slim as builder

WORKDIR /app

# Copy the application source code
COPY . .

# Install dependencies and build the application
RUN npm install
#RUN npm run build

# Stage 2: Creating the runtime container
FROM node:17-slim

WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app /app

# Install runtime dependencies
RUN npm install --only=production

# Expose a port if required
# EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
