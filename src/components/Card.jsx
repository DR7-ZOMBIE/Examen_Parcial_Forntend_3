//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({genero,banda}) {
  return (
    <div>
      <h2>Esto es un componente</h2>
      <p>Género: {genero}</p>
      <p>Banda: {banda}</p>
    </div>
  );
}

export default Card;
