import { useState } from 'react';
import Product from './Product';

const ProductsList = ({ productList, setProductList }) => {
  const [desc, setDesc] = useState(true);
  const handleUpVote = (event, id) => {
    const vote = event.target.className.includes('up') ? 1 : -1;
    const newProductListState = productList.map((product) => {
      if (product.id === id) {
        return { ...product, votes: product.votes + vote };
      }
      return product;
    });
    setProductList(newProductListState);
  };
  const toggleSort = () => {
    setDesc(!desc);
  };
  const sortedProducts = productList.sort((a, b) =>
    desc ? b.votes - a.votes : a.votes - b.votes
  );
  return (
    <div className='ui unstackable items'>
      <button className='ui button' onClick={toggleSort}>
        <i className={`large caret ${desc ? 'down' : 'up'} icon`} />
        {desc ? 'Descendent' : 'Ascendent'}
      </button>
      {sortedProducts.length === 0 && <p>No products available</p>}
      {sortedProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleUpVote={handleUpVote}
        />
      ))}
    </div>
  );
};
export default ProductsList;