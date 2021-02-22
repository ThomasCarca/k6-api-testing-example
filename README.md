## Server 
The server is a fake API written in Node.js exposing two endpoints (GET /slow, GET /fast) that respond either a status 200 or 404 within a few milliseconds. 
This emulates a very simple API with different status codes and response time and it will help us demonstrate the basic features of k6.

### Running the server
The server will be running on port 3000 by default.
```
node app.js
```

## K6
We'll be using k6 scripts to load test our fake API. The various scripts and configuration will be contained in the k6 folder.

### Running a k6 script
You can run a k6 script using the following command : 
```
k6 run --vus 1 --duration 10s slow-endpoint.js
```
or :
```
k6 run --vus 1 --iterations 50 fast-endpoint.js
```
or you can directly use a config file to specify every option/scenario you want to apply to your k6 scripts :
```
k6 run slow-endpoint.js --config config.json
```
