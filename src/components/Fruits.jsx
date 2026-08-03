import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["apple","mango","Bananna","orange","pineApple"]
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "mango", price: 7, emoji: "🥭" },
    { name: "banana", price: 2, emoji: "🍌" },
    { name: "orange", price: 5, emoji: "🍊" },
    { name: "PineApple", price: 8, emoji: "🍍" },
  ];
  return (
    <div>
      {fruits.map((fruit)=><ul><li key={fruit.name}>
        <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji}/>
        </li></ul>)}
    </div>
  );
}
