import Link from 'next/link';
import dbConnect, { getPublicationModel } from '../../lib/dbConnect';
import { getCategoryBySlug, categories } from '../../lib/categories';
import Layout from '../../components/Layout';
import PublicationCard from '../../components/PublicationCard'; // Crea este componente

export default function CategoryPage({ category, publications }) {
  if (!category) return <Layout><p>Categoría no encontrada</p></Layout>; // Manejo de error simple

  return (
    <Layout>
      <h1 className="text-2xl font-bold my-4 text-center">{category.name}</h1>
      {/* Podrías listar subcategorías aquí */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {publications.map(pub => (
          <PublicationCard key={pub._id} publication={pub} />
        ))}
      </div>
       {publications.length === 0 && <p className="text-center text-gray-500">No hay publicaciones en esta categoría aún.</p>}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { categorySlug } = context.params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { notFound: true }; // Mejor manejo de error
  }

  try {
    await dbConnect();
    const PublicationModel = getPublicationModel(categorySlug);
    // Busca las últimas 20, por ejemplo
    const result = await PublicationModel.find({ status: 'active' })
                                         .sort({ createdAt: -1 })
                                         .limit(20)
                                         .lean(); // lean() para objetos JS planos

    const publications = JSON.parse(JSON.stringify(result)); // Serialización limpia para Next.js

    return { props: { category, publications } };
  } catch (error) {
    console.error(error);
    return { props: { category, publications: [] } }; // Devuelve vacío en caso de error
  }
}
// Crea components/PublicationCard.js para mostrar la info básica y link a la pág. de detalle