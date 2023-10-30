import config from "../../config.json" with { type: "json" };;

const MONGOOSE_CONNECTION = `mongodb://${config.mongoose.host}:${config.mongoose.port}`;

console.log(`Connecting to Mongoose: ${MONGOOSE_CONNECTION}`);

export default function getConnectionString() {
  return MONGOOSE_CONNECTION;
}