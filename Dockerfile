# Image to use in the container
FROM node:latest

# Create a directory for the app
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the files from the current directory to the container
COPY . .

# Expose the port 3333
EXPOSE 3333

# Run the app
CMD ["npm", "run", "dev"]


# Create IMG 
# docker build -t rentex . 

# Run Docker -- Create Container
# docker run -p 3333:3333 rentex

# Run Docker -- Create Container -- Detached
# docker run -p 3333:3333 -d rentex


