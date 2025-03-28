import mongoose from 'mongoose';

const PublicationSchema = new mongoose.Schema({
  counterId: { type: Number, required: true, unique: true, index: true }, // ID secuencial simple
  title: { type: String, required: true },
  slug: { type: String, required: true, index: true }, // Para la URL amigable
  description: { type: String, required: true },
  categorySlug: { type: String, required: true, index: true },
  subcategorySlug: { type: String, required: true, index: true },
  // subSubcategorySlug: { type: String, index: true }, // Añadir si tienes 3 niveles
  location: { type: String }, // Simple por ahora
  contactName: { type: String, required: true },
  contactPhone: { type: String, required: true }, // Número WhatsApp del anunciante
  price: { type: Number },
  currency: { type: String, default: 'PEN' },
  images: [{ type: String }], // Array de URLs de imágenes
  status: { type: String, default: 'active', index: true },
  createdAt: { type: Date, default: Date.now },
  // Añade otros campos específicos si son esenciales para el MVP
});

// ¡IMPORTANTE! No registramos el modelo aquí globalmente.
// Lo registraremos dinámicamente al usarlo.
// export default mongoose.models.Publication || mongoose.model('Publication', PublicationSchema); // <- NO HACER ESTO ASÍ

export default PublicationSchema; // Exportamos solo el Schema