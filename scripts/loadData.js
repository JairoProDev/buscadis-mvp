// scripts/loadData.js
require('dotenv').config({ path: '.env.local' }); // Carga variables de entorno
const mongoose = require('mongoose');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');
const PublicationSchema = require('../models/Publication').default; // Ajusta ruta
const Counter = require('../models/Counter').default; // Ajusta ruta

const MONGODB_URI = process.env.MONGODB_URI;
const dataPath = path.join(__dirname, 'initial-data.json'); // Asume que está en la misma carpeta
const publicationsData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true } // new: true devuelve el documento actualizado, upsert: true crea si no existe
  );
  return sequenceDocument.seq;
}

async function loadData() {
  if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI no definida en .env.local');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB conectado para script...');

    console.log(`Cargando ${publicationsData.length} publicaciones...`);

    for (const pubData of publicationsData) {
      const categorySlug = pubData.categorySlug;
      if (!categorySlug) {
          console.warn('Publicación omitida, falta categorySlug:', pubData.title);
          continue;
      }

      // Obtener ID secuencial
      const counterId = await getNextSequenceValue('publicationId');

      // Generar slug
      const slug = slugify(pubData.title, { lower: true, strict: true });

      // Obtener/Crear el modelo para la colección específica
      const collectionName = `publications_${categorySlug}`;
      const PublicationModel = mongoose.models[collectionName] || mongoose.model(collectionName, PublicationSchema, collectionName);

      // Crear instancia de publicación
      const publication = new PublicationModel({
        ...pubData,
        counterId: counterId,
        slug: slug,
      });

      // Guardar publicación
      await publication.save();
      console.log(`Publicación "${pubData.title}" (ID: ${counterId}) guardada en ${collectionName}`);
    }

    console.log('¡Datos cargados exitosamente!');

  } catch (error) {
    console.error('Error cargando datos:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB desconectado.');
  }
}

loadData();