import dbConnect, { getPublicationModel } from '../../../lib/dbConnect';
import { getCategoryBySlug, getSubcategoryBySlug } from '../../../lib/categories';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router'; // Para obtener la URL actual

export default function PublicationPage({ publication }) {
   const router = useRouter();
   const currentUrl = typeof window !== 'undefined' ? window.location.href : ''; // Para el link de WhatsApp

   if (!publication) return <Layout><p>Publicación no encontrada</p></Layout>;

   const whatsappMessage = `Hola, vi tu anuncio "${publication.title}" en Buscadis: ${currentUrl}. Me gustaría saber más.`;
   const whatsappLink = `https://wa.me/<span class="math-inline">\{publication\.contactPhone\}?text\=</span>{encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <article className="p-4 max-w-3xl mx-auto">
         {/* Mostrar Imágenes */}
         {publication.images && publication.images.length > 0 && (
            <div className="mb-4">
               {/* Idealmente un carrusel, pero para MVP basta la primera imagen */}
               <img src={publication.images[0]} alt={publication.title} className="w-full h-auto rounded-lg object-cover" />
            </div>
         )}
        <h1 className="text-3xl font-bold mb-2">{publication.title}</h1>
        {publication.price && <p className="text-xl font-semibold text-green-600 mb-2">{publication.currency} {publication.price.toLocaleString('es-PE')}</p>}
        <p className="text-gray-600 mb-4">{publication.location}</p>
        <div className="prose lg:prose-xl mb-6" dangerouslySetInnerHTML={{ __html: publication.description.replace(/\n/g, '<br />') }} /> {/* Cuidado con XSS si la descripción viene de usuarios */}

        <p className="mb-2"><strong>Contactar a:</strong> {publication.contactName}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200"
        >
          Contactar por WhatsApp
        </a>
      </article>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { categorySlug, subcategorySlug, idSlug } = context.params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug); // Validar si existen

   // Extraer el counterId del idSlug (asumiendo formato numero-texto)
  const match = idSlug.match(/^(\d+)-/);
  if (!match) return { notFound: true };
  const counterId = parseInt(match[1], 10);

  if (!category || !subcategory || isNaN(counterId)) {
    return { notFound: true };
  }

  try {
      await dbConnect();
      const PublicationModel = getPublicationModel(categorySlug);
      // Buscar por el counterId único
      const result = await PublicationModel.findOne({ counterId: counterId, status: 'active' }).lean();

      if (!result) {
          return { notFound: true };
      }

      const publication = JSON.parse(JSON.stringify(result));
      return { props: { publication } };
  } catch (error) {
      console.error(error);
      return { notFound: true }; // Error o no encontrado
  }
}