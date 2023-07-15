// Constants
import { API } from '@/constants';
// Models
import { ResponseProductList } from '@/models';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api returning product list of MELI API.
 */
const useProductList = <Data = ResponseProductList>(
  search: string | undefined
) => {
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get('api/items', {
      params: {
        search,
      },
    });
    return response.data;
  };
  return useSWR(search ? `api/search/${search}` : null, fetcher);
};

export default useProductList;
