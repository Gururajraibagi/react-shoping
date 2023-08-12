import PRODUCT from "./shop-data.json";
import { useContext } from "react";
import { ProductContext } from "../../../context/product.context";
import ProductCard from "../../product-card/product-card.component";
import "./shop.styles.scss";
function Shop() {
  const product = useContext(ProductContext);
  return product.map((product) => (
    <div className="products-container">
      <ProductCard id={product.id} product={product}></ProductCard>
    </div>
  ));
}

export default Shop;
