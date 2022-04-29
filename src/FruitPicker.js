import { useContext } from 'react';
import Link from 'react-router-dom';
import { FruitContext } from './App';

const FruitPicker = () => {
  const { fruit, setFruit } = useContext(FruitContext);
  const handleChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <select onChange={handleChange} value={fruit}>
      <option value="apples">Apples</option>
      <option value="mangos">Mangos</option>
      <option value="bananas">Bananas</option>
    </select>
  );
};

export default FruitPicker;
