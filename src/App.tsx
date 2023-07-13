// Components
import { Header } from '@/components';
// Style
import './App.scss';

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
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
