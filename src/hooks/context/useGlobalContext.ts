// React
import { useContext } from 'react';
// Hooks
import { GlobalContext } from '@/contexts';

/**
 * Hook that facility global contexts calls.
 *
 * @return useGlobalContextResponse
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { search } = state;

  const setSearch = (payload: string) => {
    dispatch({ type: 'SET_SEARCH', payload });
  };

  return { search, setSearch };
};

export default useGlobalContext;
