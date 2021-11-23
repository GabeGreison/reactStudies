
    const Button = () => {
        function handleClick(event){
          console.log(event.target.innerText);
        }
        return <button onClick={handleClick}> Comprar </button>
      }
  
      const Titulo = () => {
        const numero = Math.random() * 100;
        return <h1>Meu título {numero}</h1>
      }
  
      const App = () => {
        return <div>Meu App
          <Titulo />
          <Button />
          <div>
            Compre aqui também 
            <Button />
          </div>
              </div>
      }
  
      ReactDOM.render(<App />, document.getElementById('app'))