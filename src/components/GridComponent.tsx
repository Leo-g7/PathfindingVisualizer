import { FunctionComponent } from 'react';
import Grid from '../classes/Grid';
import './../css/Grid.css';

const GridComponent: FunctionComponent = () => {
  const grid: Grid = new Grid(20, 60);

  return (
    <div className='grid'>
      {grid.get().map((lines, index) => {
        return (
          <div className='line' key={index} id={index.toString()}>
            {lines.map((node, nodeIndex) => {
              return <div className='node' key={nodeIndex} id={nodeIndex + '-' + index}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridComponent;
