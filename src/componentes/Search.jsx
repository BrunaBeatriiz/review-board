import { Search } from "lucide-react";

const Pesquisar = ({search, setSearch}) => {
  return(
    <input type="text" name="" id=""
    placeholder="Pesquisar favoritos..."
    value={search}
    onChange={(event) => setSearch(event.target.value)} 
    className="w-full p-1 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-400 hover:border-slate-500
    transition"
    />
    
  )
}

export default Pesquisar;