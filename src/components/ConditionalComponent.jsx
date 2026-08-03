import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalComponent() {
  // let messageOne = <h1>this is message 1</h1>;
  // let messageTwo = <h1>this is message 2</h1>;
  let message
  const display = true;
  if (display) {
    message = "this is message 1";
  } else {
    message = "this is message 2";
  }
  return message
}
