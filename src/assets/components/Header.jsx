import { Contador } from "./Contador"
export function Header() {
  return (
    <header className="header" >
      <Contador id='azul'></Contador>
      <Contador id='amarillo'></Contador>
      <Contador id='verde'></Contador>
    </header>
  );
}
