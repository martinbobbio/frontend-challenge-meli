// Props
import { CardEmptyStateProps } from '@/components/CardEmptyState/CardEmptyState';
// Assets
import { emptyStateSearch } from '@/assets';

/**
 * Function that return elements for empty state home for not founded items.
 *
 * @return CardEmptyStateProps
 */
const getEmptyStateNotFound = (): CardEmptyStateProps => {
  const title = <p>No hay publicaciones que coincidan con tu búsqueda</p>;
  const icon = <img src={emptyStateSearch} />;
  const description = (
    <ul>
      <li>
        <b>• Revisá la ortografía</b> de la palabra
      </li>
      <li>
        • Utilizá <b>palabras más genéricas</b> o menos palabras.
      </li>
      <li>
        <b>• Navegá por las categorías</b> para encontrar un producto similar
      </li>
    </ul>
  );

  return { title, icon, description };
};

export default getEmptyStateNotFound;
