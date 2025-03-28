import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB Connected!");
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Función para obtener el modelo dinámicamente
export function getPublicationModel(categorySlug) {
    const collectionName = `publications_${categorySlug}`;
    // Evita recompilar el modelo si ya existe
    if (mongoose.models[collectionName]) {
        return mongoose.models[collectionName];
    }
    // Importa el schema aquí para asegurar que está disponible
    const PublicationSchema = require('./models/Publication').default; // Ajusta la ruta si es necesario
    return mongoose.model(collectionName, PublicationSchema, collectionName);
}


export default dbConnect;