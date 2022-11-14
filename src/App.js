import './App.css';
import 'bulma/css/bulma.min.css'

const Cell = () => {
  return <>
    
      <div className='square'></div>
    
    </>
}


function App() {
  return (
    <div>
      <header>
        <div className='columns'>
          <div className='column'><Cell /></div>
          <div className='column'><Cell /></div> 
        </div>
        
      </header>
      
    </div>
  );
}


export default App;
