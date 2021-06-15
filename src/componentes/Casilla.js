export const Casilla = (props) => {
  const { casilla, moverFicha, className } = props;
  return <li onClick={() => moverFicha(casilla)}></li>;
};
