import React from 'react';

const ItemListContainer = (props) => {
  
  return (
    <div>
      <h2 className="text-success">{props.greeting}</h2>
    </div>
  );
};

export default ItemListContainer;