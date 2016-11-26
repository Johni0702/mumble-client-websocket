# mumble-client-websocket

This module provides the websocket transport protocol for the [mumble-client] module for use in both Nodejs and the browser.

### Usage

Node-style callback:
```javascript
var connect = require('mumble-client-websocket')
connect('wss://example.com:64737', {
  username: 'Test',
  password: 'Pass123'
}, function (err, client) {
  if (err) throw err;

  // Connection established
  console.log('Welcome message:', client.welcomeMessage)
  console.log('Actual username:', client.self.username)
})
```

[Promise]:
```javascript
var connect = require('mumble-client-websocket')
connect('wss://example.com:64737', {
  username: 'Test',
  password: 'Pass123'
}).done(function (client) {
  // Connection established
  console.log('Welcome message:', client.welcomeMessage)
  console.log('Actual username:', client.self.username)
}, function(err) {
  console.log('Connection failed:', err)
})
```

### License
MIT

[mumble-client]: https://github.com/johni0702/mumble-client
[Promise]: https://github.com/then/promise
