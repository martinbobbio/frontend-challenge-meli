// Style
import './SkeletonDetail.scss';
// Libreries
import Skeleton from 'react-loading-skeleton';
// Styles
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * Functional component that render component skeleton detail.
 *
 * @return React.ReactElement <SkeletonDetail/>
 */
const SkeletonDetail = () => {
  return (
    <div className='skeleton-detail text-left'>
      <Skeleton
        baseColor='#e5e5e5'
        highlightColor='#e0e0e0'
        className='breadcrumb'
        width={180}
        height={14}
      />
      <div className='product-list-container'>
        <div className='card-product-list grid grid-cols-12'>
          <div className='col-start-1 col-span-12 lg:col-start-2 lg:col-span-8  flex mx-auto text-center'>
            <div>
              <Skeleton className='image lg:hidden' width={280} height={400} />
            </div>
            <Skeleton
              className='image hidden lg:block'
              width={320}
              height={480}
            />
          </div>
          <div className='col-start-10 col-span-3 text-left hidden lg:block'>
            <Skeleton className='condition' width={140} height={14} />
            <Skeleton className='title' width={180} height={24} />
            <Skeleton className='title' width={120} height={24} />
            <Skeleton className='price' width={150} height={46} />
            <Skeleton className='button' width={190} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
