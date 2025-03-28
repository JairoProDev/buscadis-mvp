// pages/[categorySlug]/[subcategorySlug]/index.js
import dbConnect, { getPublicationModel } from '../../../lib/dbConnect';
import { getCategoryBySlug, getSubcategoryBySlug } from '../../../lib/categories';
import Layout from '../../../components/Layout';
import PublicationCard from '../../../components/PublicationCard';

// ... (Componente similar a CategoryPage, mostrando nombre de subcategoría)

export async function getServerSideProps(context) {
  const { categorySlug, subcategorySlug } = context.params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);

  if (!category || !subcategory) {
    return { notFound: true };
  }

   try {
      await dbConnect();
      const PublicationModel = getPublicationModel(categorySlug);
      const result = await PublicationModel.find({
                                                subcategorySlug: subcategorySlug,
                                                status: 'active'
                                            })
                                           .sort({ createdAt: -1 })
                                           .limit(20)
                                           .lean();
      const publications = JSON.parse(JSON.stringify(result));
      return { props: { category, subcategory, publications } };
   } catch (error) {
       // ... manejo de error
       return { props: { category, subcategory, publications: [] } };
   }
}