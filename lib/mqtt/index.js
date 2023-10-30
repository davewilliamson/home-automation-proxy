import config from "../../config.json" with { type: "json" };
import mqtt from "mqtt";

const MQTT_CONNECTION = `mqtt://${config.mqtt.host}:${config.mqtt.port}`;
const MQTT_PRESENCE = config.mqtt.presence;
const MQTT_DEBUG = config.mqtt.debug;
let MQTT_READY = false;

console.log(`Connecting to MQTT: ${MQTT_CONNECTION}`);

const client = mqtt.connect(MQTT_CONNECTION);

client.on('connect', () => {
  client.subscribe(MQTT_PRESENCE, (err) => {
    if (!err) {
      client.publish(MQTT_PRESENCE, 'MQTT Connected and working');
    } else {
      console.error(err);
    }
  });
});

client.on('message', (topic, message) => {
  if (MQTT_DEBUG) {
    console.debug(`${topic}:${message}`);
  }
  console.log(message.toString());
  MQTT_READY = true;
});

export default function () {
  return {
    connectionString: MQTT_CONNECTION,
    client: client,
    ready: MQTT_READY
  };
};
