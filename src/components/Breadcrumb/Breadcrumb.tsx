// Style
import './Breadcrumb.scss';

export interface BreadcrumbProps {
  title: React.ReactNode;
}

/**
 * Functional component that render component breadcrumb.
 *
 * @return React.ReactElement <Breadcrumb/>
 */
const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return <p className='breadcrumb text-left'>{title}</p>;
};

export default Breadcrumb;
