import Promise from 'promise'
import websocketStream from 'websocket-stream'
import MumbleClient from 'mumble-client'

function connect (address, options, callback) {
  return new Promise((resolve, reject) => {
    var ws = websocketStream(address, ['binary'])
      .once('error', reject)
      .once('connect', () => resolve(ws))
  }).then(ws => {
    return new MumbleClient(options).connectDataStream(ws)
  },
  _ => {
    return Promise.reject('Connection closed!')
  }).nodeify(callback)
}

export default connect
