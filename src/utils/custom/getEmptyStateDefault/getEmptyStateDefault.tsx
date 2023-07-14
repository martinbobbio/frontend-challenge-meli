// Props
import { CardEmptyStateProps } from '@/components/CardEmptyState/CardEmptyState';
// Assets
import { emptyStateSearch } from '@/assets';

/**
 * Function that return elements for empty state home for default.
 *
 * @return CardEmptyStateProps
 */
const getEmptyStateDefault = (): CardEmptyStateProps => {
  const title = <p>Escribí en el buscador lo que querés encontrar.</p>;
  const icon = <img src={emptyStateSearch} />;
  const description = (
    <ul>
      <li>
        <b>• Escribí tu búsqueda</b> en el campo que figura en la parte superior
        de la pantalla.
      </li>
      <li>
        <b>• Navegá por categorías de productos</b> para encontrar el producto
        que buscás.
      </li>
    </ul>
  );

  return { title, icon, description };
};

export default getEmptyStateDefault;
