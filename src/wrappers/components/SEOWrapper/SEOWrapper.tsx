// Hooks
import { useGlobalContext } from '@/hooks';
// Libreries
import { Helmet } from 'react-helmet';

// Component props
interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high order component seo with their logic.
 *
 * @return React.ReactElement <SEOWrapper/>
 */
const SEOWrapper = ({ children }: SEOWrapperProps) => {
  const { seo } = useGlobalContext();
  return (
    <>
      <Helmet>
        <title>{seo.title} | Mercado Libre 📦</title>
        {seo.dynamicTags?.map((tag, i) => (
          <meta key={i} name={tag.name} content={tag.content} />
        ))}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
