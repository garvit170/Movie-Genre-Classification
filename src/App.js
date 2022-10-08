import './App.css';
import Title from './Title.js';
import Boxes from './Boxes';
import ModelTable from './ModelTable';

function App() {
  return (
    <div className="App">
      <div className='Frame'>
        < Title />
        <Boxes/>
        <h1 className="Box-heading">Specifications</h1>
        <div className='Specs'>
          <div className='S-content'>
              <h4>Total Number of Unique Genres: 363</h4>
              <h4> Dataset: <a href="https://www.cs.cmu.edu/~ark/personas/">CMU Movie Summary Corpus</a></h4>
              <h4>Model Used: OneVsRest</h4>
          </div>
         <div className="Table-div">
            <ModelTable/>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
