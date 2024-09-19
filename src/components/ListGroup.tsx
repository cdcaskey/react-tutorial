import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Hull", "Lincoln", "Bedford", "London"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Places Lived</h1>
      <ul className="list-group">
        {items.length === 0 && <li className="list-group-item">No items</li>}
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
