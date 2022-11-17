//import './App.css';
import 'bulma/css/bulma.min.css'
import { Explorer } from './Explorer'
import styled from 'styled-components'

const Heading = styled.h5``
const Button = styled.button``
const Container = styled.div`
    display: flex;
`

const Cell = () => {
  return <>
    
      <div className='square'></div>
    
    </>
}


function App() {


  return (
    <div>
      <header>
        <Heading className='title is-1'> Raster Explorer </Heading>
        <Explorer/>
        
        
      </header>
      
    </div>
  );
}


export default App;
