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
    <>
      <Header />
      <div className='app container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-start-2 col-span-10'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default App;
