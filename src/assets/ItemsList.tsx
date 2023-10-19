type ItemsListProps = {
    items: string[];
  };
  
  const ItemsList = ({ items }: ItemsListProps) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

export default ItemsList