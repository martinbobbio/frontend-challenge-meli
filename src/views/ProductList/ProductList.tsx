// React
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
import { useProductList } from '@/hooks';
// Utils
import { getEmptyStateDefault, getEmptyStateNotFound } from '@/utils';

/**
 * Functional component that render component product list.
 *
 * @return React.ReactElement <ProductList/>
 */
const ProductList = () => {
  const { search } = useParams();
  const productList = useProductList(search);
  const shouldRender = {
    emptyStateDefault: !productList.isLoading && !productList.data,
    emptyStateNotFound:
      !productList.isLoading &&
      productList.data &&
      !productList.data.items.length,
    skeletons: productList.isLoading && !productList.data,
    main:
      !productList.isLoading &&
      productList.data &&
      !!productList.data.items.length,
  };

  return (
    <>
      {shouldRender.emptyStateDefault && (
        <CardEmptyState {...getEmptyStateDefault()} />
      )}
      {shouldRender.emptyStateNotFound && (
        <CardEmptyState {...getEmptyStateNotFound()} />
      )}
      {shouldRender.skeletons && <SkeletonList />}
      {shouldRender.main && productList.data && (
        <>
          <Breadcrumb categories={productList.data.categories} />
          <div className='product-list-container'>
            {productList.data?.items.map((item, i) => (
              <CardProductList key={i} {...item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
