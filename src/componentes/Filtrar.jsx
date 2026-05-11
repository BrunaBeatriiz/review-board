function Filtrar ({filtro, setFiltro}) {
  
  const opsCategoria = [
  "","filme","série","anime","jogo","livro","música","comida","restaurante","viagem","cidade","país","lugar","praia","cafeteria","shopping","evento","pessoa","site"];

  return (
    <select name="" id=""
      className="w-full md:w-48 p-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 focus:outline-none focus:border-blue-400 hover:border-slate-500 transition"
      value={filtro}
      onChange={(event) => setFiltro(event.target.value)}>
       <option value="">Escolha a categoria:</option>
       {opsCategoria.map((categoria)=> (
        <option key={categoria} value={categoria}>{categoria}</option>
       ))}
      </select>
  )
}

export default Filtrar;