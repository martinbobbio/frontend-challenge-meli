// React
import { useParams } from 'react-router-dom';
// Hooks
import { useProductDetail } from '@/hooks';
// Components
import { Breadcrumb, CardProductDetail, SkeletonDetail } from '@/components';
// Style
import './ProductDetail.scss';

/**
 * Functional component that render component product detail.
 *
 * @return React.ReactElement <ProductDetail/>
 */
const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = useProductDetail(id);
  const shouldRender = {
    skeletons: productDetail.isLoading && !productDetail.data,
    main: !productDetail.isLoading && productDetail.data,
  };

  return (
    <>
      {shouldRender.skeletons && <SkeletonDetail />}
      {shouldRender.main && productDetail.data && (
        <>
          <Breadcrumb categories={productDetail.data.categories} />
          <div className='product-detail-container '>
            <CardProductDetail {...productDetail.data.item} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
