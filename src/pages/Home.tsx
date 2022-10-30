import { FunctionComponent } from 'react';
import Grid from '../components/GridComponent';
import './../css/Home.css';

const Home: FunctionComponent = () => {
  return (
    <div className='home'>
      <Grid />
    </div>
  );
};

export default Home;
