import { useState } from 'react';
import { IStopwatch } from './types/types';
import Stopwatch from './components/stopwatch/Stopwatch';
import Button from './components/ui/button/Button';


function App() {
  const [stopWatches, setStopWatches] = useState<IStopwatch[]>([]);

  const addStopwatch = () => setStopWatches([...stopWatches, { id: Date.now(), time: 0, running: false }]);
  const removeStopwatch = (id: number) => setStopWatches(stopWatches.filter((sw) => sw.id !== id));


  return (
    <main>
      <Button onClick={addStopwatch} label="Add Stopwatch" />
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
