import { useState } from 'react';
import './index.css'
import Stopwatch from './components/Stopwatch';
import { StopwatchType } from './constants/types';


function App() {
  const [stopWatches, setStopWatches] = useState<StopwatchType[]>([]);

  const addStopwatch = () => {
    setStopWatches(
      [
        ...stopWatches,
        { id: Date.now(), time: 0, running: false }
      ]
    );
  };

  const removeStopwatch = (id: number) => {
    setStopWatches(stopWatches.filter((sw) => sw.id !== id));
  };

  return (
    <main>

      <button onClick={addStopwatch} className="btn">
        Add Stopwatch
      </button>
      <div className="stopwatchDiv">
        {stopWatches.map((sw) => (
          <Stopwatch
            key={sw.id}
            sw={sw}
            remove={removeStopwatch}
          />
        ))}
      </div>

    </main>
  )
}

export default App
