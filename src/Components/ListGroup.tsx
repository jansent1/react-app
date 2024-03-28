function ListGroup() {
  const items = ["Amsterdam", "Antwerpen", "Arnhem", "London", "Paris"];
  // items = [];
  return (
    <>
      <h1>List Group:</h1>
      {items.length === 0 ? <p>No cities found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
