import { useState } from "react";

function Form ({novoItem}) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nota, setNota] = useState("");
  const [catEscolhida, setCatEscolhida ] = useState("");
  const opsCategoria = [
  "todos","filme","série","anime","jogo","livro","música","comida","restaurante","viagem","cidade","país","lugar","praia","cafeteria","shopping","evento","pessoa","site",
]

 const handleSubmit = (event) => {
  event.preventDefault();

   novoItem({
    titulo,
    descricao,
    categoria: catEscolhida,
    nota
  });
 };

  return(
    <form className=" flex flex-col gap-4 justify-center items-center"
    onSubmit={handleSubmit}>
      <input type="text" placeholder="" 
      className="w-full bg-slate-700 text-white p-1 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
      value={titulo}
      onChange={(event) => setTitulo(event.target.value)}/>
      <select name="" id=""
      className="w-full bg-slate-700 text-white p-1 rounded-xl outline-none border border-slate-700 focus:border-blue-500 font-serif"
      value={catEscolhida}
      onChange={(event) => setCatEscolhida(event.target.value)}>
       <option value="">Escolha a categoria:</option>
       {opsCategoria.map((categoria)=> (
        <option key={categoria} value={categoria}>{categoria}</option>
       ))}
      </select>
       <input type="text" placeholder="" 
       className="w-full bg-slate-700 text-white p-1 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
      value={descricao}
      onChange={(event) => setDescricao(event.target.value)}/>
      <input type="number" name="" id="" step={0.1}  min={0} max={10}
      className="w-full bg-slate-700 text-white p-1 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
      value={nota}
      onChange={(event) => setNota(event.target.value)}/>
      <button type="submit" 
      className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold p-2 rounded-xl font-serif">Adicionar</button>
    </form>
  )
}

export default Form;