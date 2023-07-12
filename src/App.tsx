// Components
import { Header } from '@/components';

interface AppProps {
  children: React.ReactNode;
}

/**
 * Functional component that has the main logic of the application.
 *
 * @return React.ReactElement <Main/>
 */
const App = ({ children }: AppProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
