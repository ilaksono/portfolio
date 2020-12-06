import {useState} from 'react';


const initVis = 'MAIN'
const useVisualMode = () => {
  const [visMode, setVisMode] = useState(initVis);
  const [history, setHistory] = useState([]);
  const switchMode = (value) => {
    setVisMode(value);
    setHistory([...history, value]);
  }


  return {
    visMode,
    switchMode,
    history
  }
}


export default useVisualMode;