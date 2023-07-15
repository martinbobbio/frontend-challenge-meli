// React
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Hooks
import { useGlobalContext, useProductDetail } from '@/hooks';
// Components
import {
  Breadcrumb,
  CardEmptyState,
  CardProductDetail,
  SkeletonDetail,
} from '@/components';
// Utils
import { getEmptyStateError } from '@/utils';
// Style
import './ProductDetail.scss';

/**
 * Functional component that render component product detail.
 *
 * @return React.ReactElement <ProductDetail/>
 */
const ProductDetail = () => {
  const { id } = useParams();
  const { setSeoTitle, setSeoTagDynamic } = useGlobalContext();
  const { data, isLoading, error } = useProductDetail(id);
  const shouldRender = {
    skeletons: isLoading && !data && !error,
    main: !isLoading && data && !error,
    error: error,
  };

  // Hook for settings SEO meta tags and title
  useEffect(() => {
    if (data?.item.title) {
      setSeoTitle(data.item.title);
      setSeoTagDynamic([
        {
          name: 'description',
          content: `✓ Comprá online de manera segura con Compra Protegida - ${data.item.title}`,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {!shouldRender.skeletons && <SkeletonDetail />}
      {shouldRender.error && <CardEmptyState {...getEmptyStateError()} />}
      {shouldRender.main && data && (
        <>
          <Breadcrumb categories={data.categories} />
          <div className='product-detail-container '>
            <CardProductDetail {...data.item} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
