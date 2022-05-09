import { useCallback, useEffect, useRef, useState } from "react";

import './StopWatch.css';

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timerIdRef = useRef(null);
  const siRef = useRef(null);

  const startWatch = useCallback(() => {
    timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
    setCount(0);
  }, []);

  const stopWatch = useCallback(() => {
    clearInterval(timerIdRef.current);
  }, []);

  useEffect(() => {
    if(siRef !== null && siRef.current !== null) {
      siRef.current.focus();
    }
  }, [])
  

  return (
    <div className="stopwatch">
      <div className="stopwatch__timer">{count}s</div>
      <div className="stopwatch__actions">
        <button onClick={startWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
      </div>
      <div className="stopwatch__interactive" >
        Give me focus during startup / rendering
      </div>
    </div>
  );
};

export default StopWatch;