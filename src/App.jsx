//import './App.css';
import 'bulma/css/bulma.min.css'
import { Explorer } from './Explorer'
import styled from 'styled-components'
import ndarray from 'ndarray';
import { ColorBar, HeatmapVis, getDomain } from '@h5web/lib';

const Heading = styled.h5``
const Button = styled.button``
const Container = styled.div`
    display: flex;
`


function App() {
  const values = [[1,2,3],[4,5,6]];
  const flatValues = values.flat(Infinity);
  const dataArray = ndarray(flatValues, [2, 3]);
  const domain = getDomain(dataArray);

  return (
    <div>
      <header>
        <Heading className='title is-1'> Raster Explorer </Heading>
      </header>
      <div style={{ display: 'flex', height: '70vh'}}>
            <HeatmapVis 
                    dataArray={dataArray} 
                    domain={domain} 
                    layout= "cover" 
                    scaleType="log"
                    colorMap='Viridis'/>
          </div>
          <Explorer/>
    </div>
  );
}


export default App;
