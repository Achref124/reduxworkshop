import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteProduct, disponibleProduct } from "../JS/Actions/Actions";

function Product({ Prod }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Prod.posterUrl} />
      <Card.Body>
        <Card.Title>{Prod.name}</Card.Title>
        <Card.Text>{Prod.description}</Card.Text>
        <Card.Text>{Prod.price}</Card.Text>
        <Button
          onClick={() => dispatch(disponibleProduct(Prod.id))}
          variant={Prod.dispo ? "success" : "danger"}
        >
          {Prod.dispo ? <span>disponible</span> : <span>indisponible</span>}
        </Button>
        <Button onClick={() => dispatch(deleteProduct(Prod.id))}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
