import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthContext";

import NewProduct from "../../components/Products/NewProduct";
import Eror from "../../components/Ui/Eror";

const NewProductPage = () => {
  const { userIsLoggedIn } = useAuthContext();

  const router = useRouter();

  async function AddProductHandler(enteredProductData) {
    const response = await fetch("/api/new-product", {
      method: "POST",
      body: JSON.stringify(enteredProductData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <div>
      {userIsLoggedIn ? (
        <NewProduct onAddProduct={AddProductHandler} />
      ) : (
        <Eror />
      )}
    </div>
  );
};

export default NewProductPage;
