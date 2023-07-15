// React
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Components
import {
  Breadcrumb,
  CardEmptyState,
  CardProductList,
  SkeletonList,
} from '@/components';
// Style
import './ProductList.scss';
// Hooks
import { useGlobalContext, useProductList } from '@/hooks';
// Utils
import {
  getEmptyStateDefault,
  getEmptyStateError,
  getEmptyStateNotFound,
} from '@/utils';

/**
 * Functional component that render component product list.
 *
 * @return React.ReactElement <ProductList/>
 */
const ProductList = () => {
  const { search } = useParams();
  const { setSeoTitle, setSeoTagDynamic } = useGlobalContext();
  const { data, isLoading, error } = useProductList(search);
  const shouldRender = {
    emptyStateDefault: !isLoading && !data && !error,
    error: error,
    emptyStateNotFound: !isLoading && data && !data.items.length && !error,
    skeletons: isLoading && !data && !error,
    main: !isLoading && data && !!data.items.length && !error,
  };

  // Hook for settings SEO meta tags and title
  useEffect(() => {
    if (search) {
      setSeoTitle(search);
      setSeoTagDynamic([
        {
          name: 'description',
          content: `Envíos Gratis en el día ✓ Comprá ${search} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
        },
      ]);
    } else {
      setSeoTitle('Frontend challenge');
      setSeoTagDynamic([
        {
          name: 'description',
          content: `Envíos Gratis en el día ✓ Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      {shouldRender.emptyStateDefault && (
        <CardEmptyState {...getEmptyStateDefault()} />
      )}
      {shouldRender.emptyStateNotFound && (
        <CardEmptyState {...getEmptyStateNotFound()} />
      )}
      {shouldRender.skeletons && <SkeletonList />}
      {shouldRender.error && <CardEmptyState {...getEmptyStateError()} />}
      {shouldRender.main && data && (
        <>
          <Breadcrumb categories={data.categories} />
          <div className='product-list-container'>
            {data?.items.map((item, i) => (
              <CardProductList key={i} {...item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
