// Props
import { CardEmptyStateProps } from '@/components/CardEmptyState/CardEmptyState';
// Assets
import { emptyStateError } from '@/assets';

/**
 * Function that return elements for empty state home for default.
 *
 * @return CardEmptyStateProps
 */
const getEmptyStateError = (): CardEmptyStateProps => {
  const title = <p>Parece que algo ocurrió mal.</p>;
  const icon = <img src={emptyStateError} />;
  const description = (
    <ul>
      <li>
        <b>• Vuelve a intentar más tarde</b>, estamos trabajando en mejorar.
      </li>
      <li>
        <b>• Por favor verifique</b> que la URL ingresada sea correcta.
      </li>
    </ul>
  );

  return { title, icon, description };
};

export default getEmptyStateError;
