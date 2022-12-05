import { useRouter } from "next/router";
import Card from "../Ui/Card";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            onClick={showDetailsHandler}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h3 onClick={showDetailsHandler}>{props.title}</h3>
          <span>${props.price}</span>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
