# k6-api-testing-example
A NodeJS API load-tested with k6

## Server 
The server is a fake API written in Node.js exposing two endpoints (/slow, /fast) that respond either a status 200 or 404 within a few milliseconds. This emulates a very simple API with different status codes and response time and it will help us demonstrate the basic features of k6.

### Running the server
The server will be running on port 3000 by default.
```
node app.js
```