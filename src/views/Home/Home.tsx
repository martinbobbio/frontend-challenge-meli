import { useState, useEffect } from 'react';
// Components
import { CardEmptyState } from '@/components';
// Assets
import { emptyStateSearch } from '@/assets';
// Style
import './Home.scss';
// Props
import { CardEmptyStateProps } from '@/components/CardEmptyState/CardEmptyState';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  // Vars
  const [emptyState, setEmptyState] = useState<CardEmptyStateProps | undefined>(
    undefined
  );

  // Hooks
  useEffect(() => {
    setEmptyState({
      title: <p>Escribí en el buscador lo que querés encontrar.</p>,
      description: (
        <ul>
          <li>
            <b>• Escribí tu búsqueda</b> en el campo que figura en la parte
            superior de la pantalla.
          </li>
          <li>
            <b>• Navegá por categorías de productos</b> para encontrar el
            producto que buscás.
          </li>
        </ul>
      ),
      icon: <img src={emptyStateSearch} />,
    });
  }, []);

  return (
    <div className='home'>
      {emptyState && (
        <CardEmptyState
          title={emptyState.title}
          icon={emptyState.icon}
          description={emptyState.description}
        />
      )}
    </div>
  );
};

export default Home;
