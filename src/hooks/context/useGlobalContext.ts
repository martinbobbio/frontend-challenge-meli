// React
import { useContext } from 'react';
// Hooks
import { GlobalContext } from '@/contexts';
// Types
import { DynamicTags } from '@/contexts/global/GlobalState';

/**
 * Hook that facility global contexts calls.
 *
 * @return useGlobalContextResponse
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { seo } = state;

  const setSeoTitle = (payload: string) => {
    dispatch({ type: 'SET_SEO_TITLE', payload });
  };

  const setSeoTagDynamic = (payload: DynamicTags[]) => {
    dispatch({ type: 'SET_SEO_DYNAMIC_TAGS', payload });
  };

  return { seo, setSeoTitle, setSeoTagDynamic };
};

export default useGlobalContext;
