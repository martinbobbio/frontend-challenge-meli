// Style
import './CardEmptyState.scss';

export interface CardEmptyStateProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  description?: React.ReactNode;
}

/**
 * Functional component that render component card empty state.
 *
 * @return React.ReactElement <CardEmptyState/>
 */
const CardEmptyState = ({ title, icon, description }: CardEmptyStateProps) => {
  return (
    <div className='card-empty-state'>
      <div className='grid grid-cols-3 text-left'>
        <div className='icon flex justify-center mx-auto'>{icon}</div>
        <div className='col-span-2'>
          <div className='title'>{title}</div>
          {description && <div className='description'>{description}</div>}
        </div>
      </div>
    </div>
  );
};

export default CardEmptyState;
