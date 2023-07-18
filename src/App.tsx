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
          <div className='col-start-1 col-span-12 md:col-start-2 md:col-span-10 px-4 md:px-0'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
