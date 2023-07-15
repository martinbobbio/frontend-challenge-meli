// Constants
import { API } from '@/constants';
// Models
import { ResponseProductDetail } from '@/models';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api returning product detail of MELI API.
 */
const useProductDetail = <Data = ResponseProductDetail>(
  id: string | undefined
) => {
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get(`api/items/${id}`);
    return response.data;
  };
  return useSWR(id ? `api/product/${id}` : null, fetcher);
};

export default useProductDetail;
