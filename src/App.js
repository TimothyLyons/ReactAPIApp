import React, { useState } from 'react';
import RouteHandler from './RouteHandler';

export const FruitContext = React.createContext(
  { fruit: '', setFruit: () => {} } // default value
);

function App() {
  const [fruit, setFruit] = useState('mangos');

  return (
    <FruitContext.Provider value={{ fruit, setFruit }}>
      <RouteHandler />;
    </FruitContext.Provider>
  );
}

export default App;
