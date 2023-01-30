import { useState } from "react";
import FormControlled from "./components/FormControlled";
import ProductsList from "./components/ProductsList";
import { products, submitters, images } from "./services/seeds";
import FormUncontrolled from './components/FormUncontrolled'

const App = () => {
  const [productList, setProductList] = useState(products);

  const handleAddProduct = (product) => {
    setProductList([...productList, product]);
  };

  return (
    <div className="ui">
      <h1>Voting App</h1>
      <hr />
      {/* <FormControlled
        products={productList}
        submitters={submitters}
        images={images}
        handleAddProduct={handleAddProduct}
      /> */}
      <FormUncontrolled
        products={productList}
        submitters={submitters}
        images={images}
        handleAddProduct={handleAddProduct}
      />
      <ProductsList productList={productList} setProductList={setProductList} />
    </div>
  );
};
export default App;
