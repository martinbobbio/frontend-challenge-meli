// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Home } from '@/views';
import App from '@/App';
// Constants
import { SupportedPages } from '@/constants';

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
        <Route path={SupportedPages.Home} element={wrapApplication(<Home />)} />
        <Route
          path={SupportedPages.Components}
          element={wrapApplication(<Home />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
