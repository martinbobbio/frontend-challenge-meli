// Style
import './SkeletonList.scss';
// Libreries
import Skeleton from 'react-loading-skeleton';
// Styles
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * Functional component that render component skeleton list.
 *
 * @return React.ReactElement <SkeletonList/>
 */
const SkeletonList = () => {
  return (
    <div className='skeleton-list text-left'>
      <Skeleton
        baseColor='#e5e5e5'
        highlightColor='#e0e0e0'
        className='breadcrumb'
        width={180}
        height={14}
      />
      <div className='product-list-container'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className='card-product-list grid grid-cols-12'>
            <div className='col-span-9 flex'>
              <Skeleton className='picture' width={180} height={180} />
              <div className='text-container text-left'>
                <Skeleton className='amount' width={124} height={24} />
                <Skeleton className='title' width={320} height={18} />
                <Skeleton className='condition' width={120} height={14} />
              </div>
            </div>
            <div className='col-start-10 col-span-3 text-left'>
              <Skeleton className='condition' width={120} height={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonList;
