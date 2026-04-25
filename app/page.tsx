'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const productsData = 
[
  {
    id: "1",
    color: "Gris",
    hex: "#8b9196",
    price: "$230.000,00",
    imageUrl: "/product/preview1.JPG"
  },
  {
    id:"2",
    color:"Café",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview2.JPG"
  },
  {
    id:"3",
    color:"Negro",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview3.JPG"
  },
  {
    id:"4",
   color:"Negro",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview4.JPG"
  },
  {
    id:"5",
  color:"Negro",
      hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview5.JPG"
  },
  {
    id:"6",
   color:"Negro",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview6.JPG"
  },
  {
    id:"7",
    color:"Blanco",
    hex:"#FFFFFF",
    rice:"$230.000,00",
    imageUrl:"/product/preview7.JPG"
  },
  {
   id:"8",
   color:"Blanco",
    hex:"#FFFFFF",
    rice:"$230.000,00",
    imageUrl:"/product/preview8.JPG"
  },
  {
    id:"9",
    color:"Azul",
    hex:"#6d888f",
    rice:"$230.000,00",
    imageUrl:"/product/preview9.JPG"
  },
  {
    id:"10",
   color:"Azul",
    hex:"#6d888f",
    rice:"$230.000,00",
    imageUrl:"/product/preview10.JPG"
  },
  {
    id:"11",
    color:"Azul",
    hex:"#6d888f",
    rice:"$230.000,00",
    imageUrl:"/product/preview11.JPG"
  },
  {
    id:"12",
    color:"Azul",
    hex:"#6d888f",
    rice:"$230.000,00",
    imageUrl:"/product/preview12.JPG"
  },
  {
    id:"13",
    olor:"Color 13",
    hex:"#FFFFFF",
    rice:"$230.000,00",
    imageUrl:"/product/preview13.JPG"
  },
  {
    id:"14",
    olor:"Color 14",
    hex:"#FFFFFF",
    rice:"$230.000,00",
    imageUrl:"/product/preview14.JPG"
  },
  {
    id:"15",
    color:"Color 15",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview15.JPG"
  },
  {
    id:"16",
    color:"Color 15",
    hex:"#000000",
    rice:"$230.000,00",
    imageUrl:"/product/preview16.JPG"
  },
  {
    id:"17",
    color:"Color 17",
    hex:"#f691ab",
    rice:"$230.000,00",
    imageUrl:"/product/preview17.JPG"
  },
  {
    id:"18",
   color:"Color 17",
    hex:"#f691ab",
    rice:"$230.000,00",
    imageUrl:"/product/preview18.JPG"
  },
  {
    id:"19",
   color:"Color 17",
    hex:"#f691ab",
    rice:"$230.000,00",
    imageUrl:"/product/preview19.JPG"
  },
  {
    id:"20",
   color:"Color 17",
    hex:"#f691ab",
    rice:"$230.000,00",
    imageUrl:"/product/preview20.JPG"
  },
  {
    id: "21",
   color:"Color 17",
    hex:"#f691ab",
    price: "$230.000,00",
    imageUrl: "/product/preview21.JPG"
  },
  {
    id: "22",
    color: "Color 22",
    hex: "#cec6b4",
    price: "$230.000,00",
    imageUrl: "/product/preview22.JPG"
  },
  {
    id: "23",
     color: "Color 22",
    hex: "#cec6b4",
    price: "$230.000,00",
    imageUrl: "/product/preview23.JPG"
  },
  {
    id: "24",
     color: "Color 22",
    hex: "#cec6b4",
    price: "$230.000,00",
    imageUrl: "/product/preview24.JPG"
  },
  {
    id: "26",
    color: "Color 26",
    hex: "#95b9bf",
    price: "$230.000,00",
    imageUrl: "/product/preview26.JPG"
  },
  {
    id: "27",
    color: "Color 27",
    hex: "#95b9bf",
    price: "$230.000,00",
    imageUrl: "/product/preview27.JPG"
  },
  {
    id: "28",
    color: "Color 28",
    hex: "#cebeaa",
    price: "$230.000,00",
    imageUrl: "/product/preview28.JPG"
  },
  {
    id: "29",
    color: "Color 29",
    hex: "#dc95bb",
    price: "$230.000,00",
    imageUrl: "/product/preview29.JPG"
  },
  {
    id: "30",
    color: "Color 30",
    hex: "#dc95bb",
    price: "$230.000,00",
    imageUrl: "/product/preview30.JPG"
  }
]
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const heroImageUrl = "/hero.png";

  return (
    <>
    {/* --- MODAL DE INSCRIPCIÓN AL CASTING --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-500">
          
          <div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-500">
            
            {/* Botón de Cerrar (X) */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mitad Izquierda: Imagen del evento */}
            <div className="relative hidden md:block md:w-1/2 min-h-[600px]">
              <Image 
                src={heroImageUrl} 
                alt="Focus by Karina Garcia Casting" 
                fill 
                className="object-cover opacity-90" // Un poco menos opaca para un look premium
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h3 className="text-4xl font-serif italic mb-1 tracking-tight">Focus</h3>
                <p className="text-xs tracking-[0.5em] uppercase text-zinc-400">Modelo Presencial Medellín</p>
              </div>
            </div>

            {/* Mitad Derecha: Formulario */}
            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-white overflow-y-auto">
              <p className="text-zinc-500 tracking-[0.3em] text-[10px] uppercase mb-2">Convocatoria Abierta</p>
              <h2 className="text-3xl font-light mb-6 leading-tight uppercase tracking-wide">
                Casting <br/><span className="font-bold">Focus Collection</span>
              </h2>
              
              <p className="text-sm text-zinc-400 font-light mb-10 leading-relaxed max-w-sm">
                Buscamos las nuevas caras de nuestra próxima colección. Regístrate para la audición presencial en Medellín. Obtén acceso a la sesión de fotos exclusiva.
              </p>

              {/* Formulario de Casting */}
              <form className="flex flex-col space-y-6">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" 
                  required
                />
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" 
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono / WhatsApp" 
                  className="w-full bg-transparent border-b border-zinc-700 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" 
                  required
                />
                <div className="flex gap-4">
                  <input 
                    type="number" 
                    placeholder="Altura (cm)" 
                    className="w-1/2 bg-transparent border-b border-zinc-700 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" 
                    required
                  />
                  <input 
                    type="url" 
                    placeholder="Link Instagram/Book" 
                    className="w-1/2 bg-transparent border-b border-zinc-700 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600" 
                    required
                  />
                </div>
                
                <button 
                  type="button" 
                  className="mt-6 w-full bg-white text-black font-bold tracking-widest uppercase text-xs py-4 hover:bg-zinc-200 transition-colors duration-300"
                >
                  Inscribirme al Casting
                </button>

                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="text-[10px] text-zinc-500 hover:text-white transition-colors text-center uppercase tracking-widest mt-2"
                >
                  No por ahora, continuar a la tienda
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col min-h-screen w-full bg-white font-sans text-black">
        <div className="w-full bg-[#d9d9d9] py-2 text-center text-xs font-bold tracking-wide text-gray-800">
          ENVÍO GRATIS DESDE $600.000
        </div>
        <header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 z-50 sticky top-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-light tracking-widest text-black">ǝve</h1>
            <span className="text-[8px] tracking-[0.3em] text-gray-500 uppercase mt-1">SPORT WEAR</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-800 tracking-wide">
            <div className="relative cursor-pointer hover:text-gray-500 transition-colors">
              SETS DEPORTIVOS
              <span className="absolute -top-3 -right-6 bg-gray-800 text-white text-[9px] px-1 rounded-sm">Hot</span>
            </div>
            <a href="#" className="cursor-pointer hover:text-gray-500 transition-colors">BEST SELLER</a>
            <a href="#" className="cursor-pointer hover:text-gray-500 transition-colors">COMPLEMENTOS</a>
            <a href="#" className="cursor-pointer hover:text-gray-500 transition-colors">¿COMPRA INTERNACIONAL?</a>
          </nav>
          <div className="flex items-center space-x-5 text-gray-800">
            <a href="#" className="text-sm font-medium hidden md:block border-r border-gray-300 pr-4">Iniciar sesión</a>
            <button aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </button>
            <button aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </button>
            <button aria-label="Cart" className="relative flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              <span className="ml-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </header>
       <section className="relative w-full h-[600px] md:h-[800px] bg-zinc-200 overflow-hidden">
            <div className="absolute inset-0 block md:hidden">
              <Image 
                src={"/herovertical.png"} // <-- Pon aquí la ruta de tu foto vertical para celular
                alt="Hero Connection Mobile" 
                fill 
                className="object-cover object-center" 
                priority 
              /> 
            </div>
            <div className="absolute inset-0 hidden md:block bg-gray-500">
              <Image 
                src={"/hero.png"} // <-- Tu foto horizontal actual
                alt="Hero Connection Desktop" 
                fill 
                className="object-cover object-center" 
                priority 
              /> 
            </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center w-full justify-center space-x-6">
              <div className="h-[1px] bg-gray-300 w-32 md:w-64"></div>
              <h3 className="text-xl md:text-2xl font-light tracking-widest text-gray-800 uppercase">Diseños Exclusivos</h3>
              <div className="h-[1px] bg-gray-300 w-32 md:w-64"></div>
            </div>
            <a href="#" className="mt-4 text-xs tracking-wider text-gray-600 border-b border-gray-600 pb-[1px] hover:text-black hover:border-black transition-colors">
              Ver más
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((item) => (
              <div key={item.id} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-gray-100 relative mb-4">
                    <Image src={item.imageUrl} alt={`Authentic ${item.color}`} fill className="object-cover object-center" /> 
                </div>
                <h4 className="text-sm font-light text-gray-700">Authentic - {item.id}</h4>
                <p className="font-bold text-sm mt-1">$230.000,00</p>
                <div className="mt-3 w-5 h-5 rounded-full ring-1 ring-offset-2 ring-gray-400" style={{ backgroundColor: item.hex }}></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}