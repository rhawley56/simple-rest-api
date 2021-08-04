# Simple REST API

## TODO

### Auth

Implement Auth system to restrict certain API Functions

### API CRUD Functions

Create Update and Delete functionality

Enforce formatting on different attributes (ex. check for properly formatted email addresses and phone numbers)

Sanitize all inputs

### Attach DB to API

Create a DB connection for API to interact with

Create DB Table Schemas and the ability to setup on initial connection

### Testing

Build tests for the basic API functionality

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/rhawley56/simple-rest-api.git
cd simple-rest-api
```

```bash
npm install
```

## Run the app

```bash
npm run start:dev
```

# REST API

The REST API to the example app is described below.

## Get list of Trainers

### Request

`GET /trainers/`

    curl -i -H 'Accept: application/json' http://localhost:8080/trainers/

### Response
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 267
    ETag: W/"10b-DbtY59ZUaik+oCtyqEurVt/qeiU"
    Date: Wed, 04 Aug 2021 20:53:33 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [{"id":"trainer-id-000001","email":"trainer1@campgladiator.com","phone":"5125155120","first_name":"Fearless","last_name":"Contender"},{"id":"trainer-id-000002","email":"trainer2@campgladiator.com","phone":"5125155120","first_name":"Fearless","last_name":"Contender"}]

## Create a new Trainer

### Request

`POST /trainers/id/`

    curl -i -H 'Content-Type: application/json' -d '{"email":"test","phone":"2108675309","first_name":"Test","last_name":"Trainer"}' http://localhost:8080/trainers/23/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 48
    ETag: W/"30-cV+c3h6kvKYYpFlkctFb93nEk6M"
    Date: Wed, 04 Aug 2021 20:32:16 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"trainer":"Test Trainer created with ID of 23"}

## Get a specific Trainer

### Request

`GET /trainers/id/`

    curl -i -H 'Accept: application/json' http://localhost:8080/trainers/23/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 127
    ETag: W/"7f-cnFs20AHJvRjttbRC3IReQcBTbs"
    Date: Wed, 04 Aug 2021 20:50:35 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"id":"trainer-id-23","email":"trainer@campgladiator.com","phone":"5125155120","first_name":"Fearless","last_name":"Contender"}