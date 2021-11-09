import './App.css';
import FlipCard from './components/ui/FlipCard';

function App() {
  return (
    <div id="App">
      <FlipCard>
        <div>
          <div>1a</div>
          <div>1b</div>
          <div>1c</div>
        </div>
        <img
          style={{ height: '80%', width: '80%' }}
          src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        ></img>
      </FlipCard>
    </div>
  );
}

export default App;
