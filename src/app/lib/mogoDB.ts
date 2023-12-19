import mongoose from 'mongoose';
const MONGODB_URI = "mongodb+srv://hnsenergy:MFDs4LixcT3R35Ra@cluster0.co3zz.mongodb.net/hnsenergyproducts?retryWrites=true&w=majority";
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
type objectGlobal = {
  conn: any;
  promise: any;
};
declare global {
  var mongoosse: objectGlobal;
}
let cached = global.mongoosse;
if (!cached) {
  cached = global.mongoosse = { conn: null, promise: null };
}
async function connectMongo() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    if (MONGODB_URI) {
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      });
      console.log(cached.promise);
    } else {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      );
    }
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}
export default connectMongo;