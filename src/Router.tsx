// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { ProductDetail, ProductList } from '@/views';
import App from '@/App';

/**
 * Functional component that render the router and wrap the application.
 *
 * @return React.ReactElement <Router/>
 */
const Router = () => {
  /**
   * Functional component that wrap the views and add logics.
   *
   */
  const wrapApplication = (view: React.ReactNode) => {
    return <App>{view}</App>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={wrapApplication(<ProductList />)} />
        <Route
          path={'/search/:search'}
          element={wrapApplication(<ProductList />)}
        />
        <Route
          path={'/product/:id'}
          element={wrapApplication(<ProductDetail />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
