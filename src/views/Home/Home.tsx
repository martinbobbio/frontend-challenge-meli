// Components
import { Breadcrumb, CardEmptyState, CardProduct } from '@/components';
// Style
import './Home.scss';
// Hooks
import { useGlobalContext, useProducts } from '@/hooks';
// Utils
import { getEmptyStateDefault, getEmptyStateNotFound } from '@/utils';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  // Vars
  const { search } = useGlobalContext();
  const products = useProducts(search);
  const shouldRender = {
    emptyStateDefault: !products.isLoading && !products.data,
    emptyStateNotFound:
      !products.isLoading && products.data && !products.data.items.length,
    skeletons: products.isLoading && !products.data,
    main: !products.isLoading && products.data && !!products.data.items.length,
  };

  // Hooks

  //if (shouldRender.main && !products.data?.items.length) {

  return (
    <>
      {shouldRender.emptyStateDefault && (
        <CardEmptyState {...getEmptyStateDefault()} />
      )}
      {shouldRender.emptyStateNotFound && (
        <CardEmptyState {...getEmptyStateNotFound()} />
      )}
      {shouldRender.skeletons && <>skeletons</>}
      {shouldRender.main && (
        <>
          <Breadcrumb title={'Electronica > Televisores'} />
          {products.data?.items.map((item, i) => (
            <CardProduct key={i} {...item} />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
