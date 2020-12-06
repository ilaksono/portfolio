import useVisualMode from 'hooks/useVisualMode';
import React from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const {visMode, switchMode, history} = useVisualMode();
  return (
    <AppContext.Provider value={{
      visMode,
      switchMode,
      history
    }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContext;