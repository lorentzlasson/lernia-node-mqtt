const mqtt = require('mqtt')

const TOPIC = 'lernia'
const URL = 'mqtt://iot.eclipse.org'

const client  = mqtt.connect(URL)

console.log('RUNNING')

const publish = () => {
  client.publish(TOPIC, 'Hello from node')
  setTimeout(publish, 2000)
}

client.on('connect', () => {
  console.log('CONNECTED')
  client.subscribe(TOPIC)
  publish()
})

client.on('message', (topic, message) => {
  console.log(message.toString())
})
