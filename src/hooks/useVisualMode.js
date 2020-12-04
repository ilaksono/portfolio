import {useState} from 'react';


const initVis = 'MAIN'
const useVisualMode = () => {
  const [visMode, setVisMode] = useState(initVis);

  const switchMode = (value) => {
    setVisMode(value);
  }


  return {
    visMode,
    switchMode
  }
}


export default useVisualMode;