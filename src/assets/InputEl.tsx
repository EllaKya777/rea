import { ReactNode, useState } from "react";

type InputElProps = {
    onAddItem: (item: string) => void; // Callback function to add items
  };

const InputEl = ({ onAddItem }: InputElProps): ReactNode => {
    const [item, setItem] = useState<string>('');
 

    const handleSubmit= (e: { preventDefault: () => void; }) => {
       e.preventDefault();
       if(item.trim() !== '') {
        setItem('')
        onAddItem(item);
       }
    }


  return (
  <>
  <form  onSubmit={handleSubmit}>
    <input 
    type='text' 
    className='newItem'
    placeholder="Add New Item"
    value={item}
    onChange={(e) => setItem(e.target.value)}
    /> 
    <label htmlFor='newItem'></label>
    <button type='submit' id='addItem'>ADD</button>
    </form>
  </>
  )
}

export default InputEl
