// Style
import './CardEmptyState.scss';

export interface CardEmptyStateProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  description?: React.ReactNode;
}

/**
 * Functional component that render component card alert.
 *
 * @return React.ReactElement <CardEmptyState/>
 */
const CardEmptyState = ({ title, icon, description }: CardEmptyStateProps) => {
  return (
    <div className='card-alert'>
      <div className='grid grid-cols-3 text-left'>
        <div className='icon flex justify-center'>{icon}</div>
        <div className='col-span-2'>
          <div className='title'>{title}</div>
          {description && <div className='description'>{description}</div>}
        </div>
      </div>
    </div>
  );
};

export default CardEmptyState;
