# Node 4.4.5 LTS
FROM node:argon

# Add the application source
ADD . /code
WORKDIR /code

# Install the dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["./node_modules/.bin/nodemon", "app.js"]
