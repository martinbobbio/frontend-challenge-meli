// Style
import './Breadcrumb.scss';

export interface BreadcrumbProps {
  categories: string[];
}

/**
 * Functional component that render component breadcrumb.
 *
 * @return React.ReactElement <Breadcrumb/>
 */
const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  return (
    <p className='breadcrumb text-left'>
      {categories?.map((category, i) => (
        <span key={i}>
          <span>{category}</span>
          {i !== categories.length - 1 && (
            <span className='separator'>{'>'}</span>
          )}
        </span>
      ))}
    </p>
  );
};

export default Breadcrumb;
