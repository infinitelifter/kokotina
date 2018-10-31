import * as React from "react";
import "./styles.css";

interface Props {
  removeItem: (item: string) => void;
  item: string;
}

const ItemsList: React.SFC<Props> = props => {
  return (
    <div className="list-item" key={props.item}>
      {props.item}
      <div onClick={() => props.removeItem(props.item)} className="deleteItem">
        x
      </div>
    </div>
  );
};

export default ItemsList;
