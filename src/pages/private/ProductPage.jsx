import { Link } from "react-router-dom";
import products from "../data";
 
const ProductPage = () => {
  return (
   <section className="section">
      <h2>products</h2>
      <h2>private section</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/product/${product.id}`} style={{color : "red" }}>Click to know more</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductPage;
