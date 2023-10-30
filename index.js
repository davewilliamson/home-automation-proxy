import 'dotenv/config'
import config from "./config.json" with { type: "json" };
import mongoose from './lib/mongoose/index.js';
import mqtt from './lib/mqtt/index.js';
import net from 'node:net';

console.log(process.env);

/*
import ProxyServer from 'transparent-proxy';

//init ProxyServer
const server = new ProxyServer({
  intercept: true,
  verbose: true,
  injectData: (data, session) => {
    console.debug(data);
    return data;
  }
});

//starting server on port 8080
server.listen(1883, '0.0.0.0', function () {
  console.log('TCP-Proxy-Server started!', server.address());
});

const tuya_server = {
  port: 1883,
  ip: '52.36.142.64'
}

const dave_bedside_light = {
  ip: '172.30.15.150',
  port: 11147,
  mac: 'CC:50:E3:C9:63:04',
  type: 'bulb',
  status: false
}

const CC50E3C96304 = dave_bedside_light;

/*
const server = net.createServer();
const client = new net.Socket();

client.connect(dave_bedside_light.port, dave_bedside_light.ip, function () {
  console.log('Light Bulb Connected');
  //client.write('Hello, server! Love, Client.');
});

server.on('connection', handleServerConnection);



server.listen(config.ext_listen_port, function () {
  console.log(`server listening: ${server.address()}`);
});

function handleServerConnection(conn) {

  const remoteAddress = `${conn.remoteAddress} + ':' + ${conn.remotePort}`;

  console.log(`New client connection from ${remoteAddress}`);

  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);

  client.on('data', function (data) {
    console.log('Received: ' + data);
    conn.write(data);
  });

  function onConnData(d) {
    console.debug(`connection data from ${remoteAddress}:`, d);
    client.write(d);
  };
};
*/