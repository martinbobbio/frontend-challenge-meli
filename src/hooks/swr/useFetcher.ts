// Constants
import { API } from '@/constants';
// Libreries
import useSWR from 'swr';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type FetcherFn<Data> = () => Promise<AxiosResponse<Data>>;

interface ResponseAPI {
  name: string;
  age: number;
}

/**
 * Hook fetch data with axios and swr.
 */
const useFetcher = <Data = ResponseAPI>(
  url: string,
  axiosConfig?: AxiosRequestConfig
) => {
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API(url, axiosConfig);
    return response.data;
  };
  return useSWR(url, fetcher);
};

export default useFetcher;
