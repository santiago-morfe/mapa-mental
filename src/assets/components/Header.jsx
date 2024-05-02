import { Contador } from "./Contador"
export function Header() {
  return (
    <header className="header" >
      <Contador >green</Contador>
      <Contador >red</Contador>
      <Contador >orange</Contador>
    </header>
  );
}
