
import {useState, useCallback} from 'react';

export const navList = [
  'PROFILE',
  'MAIN',
  'CONTACT',
  'ARTICLE'
]
export const navKeys = {
  PROFILE: 0,
  MAIN: 1,
  CONTACT: 2,
  ARTICLE: 3
}
export const navKeysNext = {
  PROFILE: 1,
  MAIN: 2,
  CONTACT: 3,
  ARTICLE: 0
}
export const navKeysPrev = {
  PROFILE: 3,
  MAIN: 0,
  CONTACT: 1,
  ARTICLE: 2
}


const initVis = 'PROFILE'
const useVisualMode = () => {
  const [visMode, setVisMode] = useState(initVis);
  const [history, setHistory] = useState([]);
  const switchMode = useCallback((value) => {
    setVisMode(value);
    setHistory(prev => [...prev, value]);
  }, []);


  return {
    visMode,
    switchMode,
    history
  }
}


export default useVisualMode;