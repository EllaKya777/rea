
import { useState } from 'react';
import InputEl from '../assets/InputEl'
import ItemsList from '../assets/ItemsList'
import { useOrderContext } from '../OrderContext';

const MainSeller = () => {
    const [items, setItems] = useState<string[]>([]);
    const { confirmed } = useOrderContext();

    const handleAddItem = (item: string) => {
      const newItems = [...items, item];
      setItems(newItems);
      localStorage.setItem('items', JSON.stringify(newItems));
      };
      
      

  return (
    <main className='container'>
        <InputEl onAddItem={handleAddItem} />
        <ItemsList items={items}/>
        {confirmed && <p>Confirmed!</p>}
        <button style={{ maxWidth: '50%', margin: '0 auto'}}
      >SEND ORDER</button>
      
    </main>
  )
}

export default MainSeller
