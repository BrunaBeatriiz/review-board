import { useEffect, useMemo, useState } from "react";
import Form from "./componentes/Form";
import Card from "./componentes/Card";

import { Plus, X } from "lucide-react";
import Pesquisar from "./componentes/Search";
import Filtrar from "./componentes/Filtrar";




function App() {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  const [abrirForm, SetAbrirForm] = useState(false);
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos])


  const novoItem = ({ titulo, descricao, categoria, nota }) => {
    let favorito = {
      id: Date.now(),
      titulo: titulo,
      categoria: categoria,
      descricao: descricao,
      nota: nota,
      like: false,
      deslike: false,
      isRemoving:false,
    }

    setFavoritos((prev) => [...prev, favorito]);
    SetAbrirForm(false);
  }



  const toggleLike = (id) => {
    let arrFavoritosLike = favoritos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: !item.like,
          deslike: false,
        }
      } else {
        return item;
      }
    })
    setFavoritos(arrFavoritosLike);
  }


  const toggleDeslike = (id) => {
    let arrFavoritosDeslike = favoritos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          like: false,
          deslike: !item.deslike,
        }
      } else {
        return item;
      }
    })

    setFavoritos(arrFavoritosDeslike);
  }

  const removerItem = (id) => {
    let remove = favoritos.filter((item) => item.id !== id);

    setFavoritos(remove)
  }


  // let favFiltradosPesquisa = favoritos.filter((item) => item.titulo.toLowerCase().includes(search.toLowerCase()));
  const listaRender = useMemo(() => {
     return favoritos.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase())
  )
  .filter((item) =>
    filtro ? item.categoria === filtro : true
   );
  }, [favoritos, search,filtro]);


  // let listaFiltro = favoritos.filter((item) => 
  //   item.categoria === filtro
  // )

  return (
    <>
      <div className="min-h-screen bg-slate-950 p-8 scroll-smooth">
        <div className="max-w-6xl mx-auto flex flex-col">
          <h1 className="text-white text-4xl font-bold mb-8 text-center font-serif -ml-14 md:ml-0 lg:md-0">
            Review Board
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Salve, avalie e organize suas experiências
          </p>
         <div className="bg-slate-900 p-4 rounded-2xl shadow-lg mb-8 flex flex-col md:flex-row gap-4 items-center">
          <Pesquisar search={search} setSearch={setSearch} />
          <Filtrar filtro={filtro} setFiltro={setFiltro} />
        </div>      

          {abrirForm && (
            <div className="bg-slate-900 rounded-2xl p-6 shadow-lg mb-10 max-w-xl mx-auto w-full">
              <Form novoItem={novoItem} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoritos.length === 0 && search === "" && (
              <p className="text-slate-500 text-center mt-20 text-lg">
                Nenhum favorito adicionado.
              </p>
            )}
            {listaRender.map((item, index) => (
              <div key={item.id}
              style={{animationDelay: `${index * 80}ms`}}
              className="animate-[fadeIn_0.3s_ease_forwards] opacity-0">
                <Card
                
                item={item}
                toggleLike={toggleLike}
                toggleDeslike={toggleDeslike}
                removerItem={removerItem} />

              </div>
            ))}

          
          </div>
        </div>
      </div>
      <button
        onClick={() => SetAbrirForm(!abrirForm)}
        className="
        fixed top-7 right-8 
        md:top-7 md:right-8 md:bottom-auto
        lg:right-14
        w-12 h-12 rounded-full bg-slate-800 border border-slate-500 text-white
        text-3xl font-light shadow-lg flex justify-center items-center
        hover:shadow-blue-500/20
        hover:scale-110
        hover:text-blue-300
        hover:border-blue-300
        active:scale-90
        transition-all duration-200 z-50  
  "
      >
        {abrirForm ? <X size={22} /> : <Plus size={22} />}
      </button>
    </>
  )
}

export default App;
