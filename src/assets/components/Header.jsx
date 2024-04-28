import { Contador } from "./Contador"
import { BtnFull } from "./BtnFull"
export function Header() {
  return (
    <header className="header" >
      <Contador >green</Contador>
      <Contador >red</Contador>
      <Contador >black</Contador>
      <BtnFull />
    </header>
  );
}
