const Compras = () => {
  const [contador, setContador] = React.useState(0);
  function comprar() {
    setContador(contador + 1);
  }

  if (contador <= 10) {
    return (
      <div>
        <button onClick={comprar}>Comprar</button>
        <p>Total : {contador}</p>
        <p>Preço : R$ {contador * 250}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={comprar}>Comprar</button>
        <p>Total : {contador}</p>
        <p>Preço : R$ {contador * 175}</p>
      </div>
    );
  }
};

const Button = () => {
  function handleClick(event) {
    console.log(event.target.innerText);
  }
  return <button onClick={handleClick}> Comprar </button>;
};

const Titulo = () => {
  const numero = Math.random() * 100;
  return <h1>Meu título {numero}</h1>;
};

const App = () => {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <h2>Preço Unitário: R$ 250,00  (Acima de 10 peças, 30% de desconto)</h2>
      <Compras />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
