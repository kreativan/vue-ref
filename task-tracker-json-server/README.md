# Task Tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## JSON Server
Full fake Rest API. Don't forget to create db.json file.       
https://npmjs.com/package/json-server/

### Install JSON Server
```
npm i json-server
```

### Start JSON Server
```
json-server --watch db.json
```

### package.json
add `backend` to the scripts object
```
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "db": "json-server --watch db.json --port 5000"
  },
```

### Run
```
npm run db
```

### localhost
```
http://localhost:5000/tasks
```


## Router
```
npm i vue-router@next
```
