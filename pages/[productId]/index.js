import { MongoClient, ObjectId } from "mongodb";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

import ProductList from "../../components/Products/ProductList";

import classes from "../../components/Products/ProductDetail.module.css";

const ProductDetails = ({ productData, products }) => {
  const { image, title, description, price, id } = productData;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price, image }));
  };

  return (
    <section className={classes.detail}>
      <div className={classes.prodDet}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className={classes.detailContent}>
          <h1>{title}</h1>
          <b>Details:</b>
          <p>{description}</p>
          <span>${price}</span>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
        </div>
      </div>

      <div className={classes.current_products}>
        <h1 className={classes.cnt}>Check other Products</h1>
        <ProductList products={products} />;
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/products?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: {
        productId: product._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/products?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const selectedProduct = await productsCollection.findOne({
    _id: ObjectId(productId),
  });

  const products = await productsCollection.find().toArray();

  client.close();

  return {
    props: {
      productData: {
        id: selectedProduct._id.toString(),
        title: selectedProduct.title,
        description: selectedProduct.description,
        price: selectedProduct.price,
        image: selectedProduct.image,
      },
      products: products.map((product) => ({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        id: product._id.toString(),
      })),
    },
  };
}

export default ProductDetails;
