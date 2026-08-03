export default function Fruit({ name, price, emoji}) {
  return (
    //<li>{emoji}{name}{price}</li>

    <>
      <li>
        <h3>
          {emoji} {name} {price}
        </h3>
      </li>
    </>
  );
}
