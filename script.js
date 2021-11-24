const Compras = () => {
  const [contador, setContador] = React.useState(0);

  if (contador <= 10) {
    return (
      <div>
        <button onClick={() => setContador(contador +1)}>Comprar</button>
        <p>Total : {contador}</p>
        <p>Preço : R$ {contador * 250}</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setContador(contador +1)}>Comprar</button>
        <p>Total : {contador}</p>
        <p>Preço : R$ {contador * 175}</p>
      </div>
    );
  }
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
