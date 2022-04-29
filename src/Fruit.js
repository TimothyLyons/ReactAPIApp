import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FruitContext } from './App';

const Fruit = () => {
  const { fruit } = useContext(FruitContext);
  return (
    <div className="Fruit">
      <header className="Fruit-header">
        <p>I like {fruit}.</p>
        <Link to="/">Home</Link>
      </header>
    </div>
  );
};

export default Fruit;
