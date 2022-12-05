import { MongoClient } from "mongodb";

import ProductList from "../../components/Products/ProductList";

const HomePage = (props) => {
  return (
    <div className="main">
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "40px",
        }}
      >
        Welcome to Products!
      </h1>
      <ProductList products={props.products} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/products?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();

  client.close();

  return {
    props: {
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

export default HomePage;
