// Constants
import { API } from '@/constants';
// Models
import { ResponseProducts } from '@/models';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api returning products of MELI API.
 */
const useProducts = <Data = ResponseProducts>(search: string) => {
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get('api/items', {
      params: {
        search,
        firstname: 'Martin',
        lastname: 'Bobbio',
      },
    });
    return response.data;
  };
  return useSWR(search ? `api/items/${search}` : null, fetcher);
};

export default useProducts;
