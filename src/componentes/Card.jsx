import { Heart, ThumbsDown, Trash2 } from "lucide-react";

function Card({ item, toggleLike, toggleDeslike, removerItem }) {

  const { id, titulo, descricao, categoria, nota, like, deslike } = item;


  let num = [0,1, 2, 3, 4,5];

  var cores = ['bg-red-500', 'bg-orange-500','bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500'];

   let div = Math.floor(nota / 2);

   const corAtual = cores[Math.min(div, cores.length-1)];

  return (
    <div className="bg-slate-900 p-5 rounded-2xl shadow-lg border border-slate-700 flex flex-col overflow-hidden gap-1 hover:border-slate-500 opacity-0 hover:-translate-y-4 transition-all duration-300 animate-[fadeIn_0.3s_ease_forwards]">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-white text-xl font-bold tracking-wide font-serif mb-1">
          {titulo.toUpperCase()}
        </h1>
        <div className="flex gap-1">
          {num.map((num) => {
        
            if (num <= div) {
              return (
              <div
              key={num}
              className={`${corAtual} w-3 h-3 rounded-full`}></div>
            )
            } else {
              return (
              <div
              key={num}
              className="bg-slate-700 w-3 h-3 rounded-full"></div>
              )
            }
          })}
        </div>
      </div>
      <p className="text-slate-400 text-sm uppercase w-full tracking-wide px-2 py-1 rounded-lg bg-slate-800 my-1">
        {categoria}
      </p>



     
<div className="flex flex-col gap-2">

  <p className="text-white text-sm font-serif leading-relaxed line-clamp-2">
    {descricao}
  </p>

 <details className="group">

  <summary className="cursor-pointer text-blue-400 hover:text-blue-300 transition list-none text-sm mt-1">
    Ver mais
  </summary>

  <p className="text-white text-sm font-serif leading-relaxed group-open:hidden">
    {descricao}
  </p>

  <p className="hidden group-open:block text-slate-300 mt-2 leading-relaxed font-serif">
    {descricao}
  </p>

</details>

</div>



      <div className="flex items-center justify-between mt-2">
        <p className="text-white font-serif text-xl font-semibold">
          {Number(nota).toFixed(1)}
        </p>

        <div className="flex gap-2">

          <button onClick={() => toggleLike(id)}
            className={`p-2 border border-slate-700 rounded-lg transition hover:scale-110 hover:bg-slate-800 active:scale-90 hover:text-red-400 duration-150
            ${like? "text-red-500": "text-white"}`}>
            <Heart size={18}/>
          </button>

          <button onClick={() => toggleDeslike(id)}
            className={`p-2 border border-slate-700 rounded-lg transition hover:scale-110 hover:bg-slate-800 hover:text-blue-400 active:scale-90 duration-150
            ${deslike? "text-blue-500": "text-white"}`}>
            <ThumbsDown size={18}/>
          </button>
          
          <button onClick={() => removerItem(id)} className="p-2 border border-slate-700 rounded-lg text-white hover:text-red-500  hover:bg-slate-800 transition hover:scale-110 active:scale-90 duration-150">
            <Trash2 size={18}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;