"use client";

import React, { useState, useMemo } from 'react';

// ==========================================
// ICONOS NATIVOS SVG
// ==========================================
const IconChevronRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
const IconChevronLeft = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
const IconViewList = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="6" width="18" height="2" rx="1" />
    <rect x="3" y="11" width="18" height="2" rx="1" />
    <rect x="3" y="16" width="18" height="2" rx="1" />
  </svg>
);
const IconView2Cols = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="4" width="6" height="16" rx="1" />
    <rect x="13" y="4" width="6" height="16" rx="1" />
  </svg>
);
const IconView3Cols = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="4" width="4" height="16" rx="0.5" />
    <rect x="10" y="4" width="4" height="16" rx="0.5" />
    <rect x="17" y="4" width="4" height="16" rx="0.5" />
  </svg>
);
const IconView4Cols = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="4" width="3.5" height="16" rx="0.5" />
    <rect x="7.5" y="4" width="3.5" height="16" rx="0.5" />
    <rect x="13" y="4" width="3.5" height="16" rx="0.5" />
    <rect x="18.5" y="4" width="3.5" height="16" rx="0.5" />
  </svg>
);
// ==========================================

const productsData = [
  { id: "1", color: "Gris", hex: "#8b9196", price: "$230.000,00", imageUrl: "/product/preview1.JPG" },
  { id: "2", color: "Café", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview2.JPG" },
  { id: "3", color: "Negro", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview3.JPG" },
  { id: "4", color: "Negro", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview4.JPG" },
  { id: "5", color: "Negro", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview5.JPG" },
  { id: "6", color: "Negro", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview6.JPG" },
  { id: "7", color: "Blanco", hex: "#FFFFFF", price: "$230.000,00", imageUrl: "/product/preview7.JPG" },
  { id: "8", color: "Blanco", hex: "#FFFFFF", price: "$230.000,00", imageUrl: "/product/preview8.JPG" },
  { id: "9", color: "Azul", hex: "#6d888f", price: "$230.000,00", imageUrl: "/product/preview9.JPG" },
  { id: "10", color: "Azul", hex: "#6d888f", price: "$230.000,00", imageUrl: "/product/preview10.JPG" },
  { id: "11", color: "Azul", hex: "#6d888f", price: "$230.000,00", imageUrl: "/product/preview11.JPG" },
  { id: "12", color: "Azul", hex: "#6d888f", price: "$230.000,00", imageUrl: "/product/preview12.JPG" },
  { id: "13", color: "Color 13", hex: "#FFFFFF", price: "$230.000,00", imageUrl: "/product/preview13.JPG" },
  { id: "14", color: "Color 14", hex: "#FFFFFF", price: "$230.000,00", imageUrl: "/product/preview14.JPG" },
  { id: "15", color: "Color 15", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview15.JPG" },
  { id: "16", color: "Color 15", hex: "#000000", price: "$230.000,00", imageUrl: "/product/preview16.JPG" },
  { id: "17", color: "Color 17", hex: "#f691ab", price: "$230.000,00", imageUrl: "/product/preview17.JPG" },
  { id: "18", color: "Color 17", hex: "#f691ab", price: "$230.000,00", imageUrl: "/product/preview18.JPG" },
  { id: "19", color: "Color 17", hex: "#f691ab", price: "$230.000,00", imageUrl: "/product/preview19.JPG" },
  { id: "20", color: "Color 17", hex: "#f691ab", price: "$230.000,00", imageUrl: "/product/preview20.JPG" },
  { id: "21", color: "Color 17", hex: "#f691ab", price: "$230.000,00", imageUrl: "/product/preview21.JPG" },
  { id: "22", color: "Color 22", hex: "#cec6b4", price: "$230.000,00", imageUrl: "/product/preview22.JPG" },
  { id: "23", color: "Color 22", hex: "#cec6b4", price: "$230.000,00", imageUrl: "/product/preview23.JPG" },
  { id: "24", color: "Color 22", hex: "#cec6b4", price: "$230.000,00", imageUrl: "/product/preview24.JPG" },
  { id: "26", color: "Color 26", hex: "#95b9bf", price: "$230.000,00", imageUrl: "/product/preview26.JPG" },
  { id: "27", color: "Color 27", hex: "#95b9bf", price: "$230.000,00", imageUrl: "/product/preview27.JPG" },
  { id: "28", color: "Color 28", hex: "#cebeaa", price: "$230.000,00", imageUrl: "/product/preview28.JPG" },
  { id: "29", color: "Color 29", hex: "#dc95bb", price: "$230.000,00", imageUrl: "/product/preview29.JPG" },
  { id: "30", color: "Color 30", hex: "#dc95bb", price: "$230.000,00", imageUrl: "/product/preview30.JPG" }
];

const uniqueColors = Array.from(new Set(productsData.map(p => p.hex))).filter(Boolean);

// Función para convertir "$230.000,00" a número entero 230000
const parsePrice = (priceStr: string) => {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace('$', '').replace(/\./g, '').replace(',00', ''), 10);
};

export default function CollectionPage() {
  // ESTADOS DE LA PÁGINA
  const [viewMode, setViewMode] = useState(4); // 1, 2, 3 o 4 columnas
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('fecha');
const [selectedColors, setSelectedColors] = useState<string[]>([]);  
  // ESTADOS DE PRECIO
  const [inputMinPrice, setInputMinPrice] = useState(0);
  const [inputMaxPrice, setInputMaxPrice] = useState(500000);
  const [appliedMinPrice, setAppliedMinPrice] = useState(0);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(500000);

  // Lógica para seleccionar/deseleccionar colores
const toggleColor = (hex: string) => { // <-- Agregamos : string aquí
    setSelectedColors(prev => 
      prev.includes(hex) ? prev.filter(c => c !== hex) : [...prev, hex]
    );
  };

  // Efecto que filtra y ordena los productos automáticamente cuando cambian los estados
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    // 1. Filtrar por color
    if (selectedColors.length > 0) {
      result = result.filter(p => selectedColors.includes(p.hex));
    }

    // 2. Filtrar por precio
    result = result.filter(p => {
      const priceNum = parsePrice(p.price);
      return priceNum >= appliedMinPrice && priceNum <= appliedMaxPrice;
    });

    // 3. Ordenar
    if (sortBy === 'asc') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'desc') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    // 4. Paginación (Limitar items)
    return result.slice(0, itemsPerPage);
  }, [selectedColors, appliedMinPrice, appliedMaxPrice, sortBy, itemsPerPage]);

  // Clases dinámicas para la grilla según la vista seleccionada
  const gridClassNames = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[viewMode];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800">
      
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-8 flex items-center gap-1">
        Inicio <IconChevronRight className="w-3 h-3" /> Sets Deportivos Para Mujer
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR (Filtros) */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          
          {/* Disponibilidad (Estructural - Falta prop en JSON para funcionar) */}
          <div className="mb-8 border-b pb-4">
            <h3 className="text-xs font-bold mb-4 flex justify-between items-center cursor-pointer uppercase">
              Disponibilidad <IconChevronDown className="w-4 h-4 text-gray-400" />
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                En Existencia
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                Agotado
              </label>
            </div>
          </div>

          {/* Filtro de Precio */}
          <div className="mb-8 border-b pb-4">
            <h3 className="text-xs font-bold mb-4 flex justify-between items-center cursor-pointer uppercase">
              Precio <IconChevronDown className="w-4 h-4 text-gray-400" />
            </h3>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <span className="text-gray-400">$</span>
              <input 
                type="number" 
                value={inputMinPrice} 
                onChange={(e) => setInputMinPrice(Number(e.target.value))}
                className="w-20 border p-1 text-center text-xs" 
              />
              <span className="text-gray-400">to</span>
              <span className="text-gray-400">$</span>
              <input 
                type="number" 
                value={inputMaxPrice} 
                onChange={(e) => setInputMaxPrice(Number(e.target.value))}
                className="w-24 border p-1 text-center text-xs" 
              />
            </div>
            <button 
              onClick={() => {
                setAppliedMinPrice(inputMinPrice);
                setAppliedMaxPrice(inputMaxPrice);
              }}
              className="w-full bg-black text-white text-xs font-bold py-3 uppercase tracking-wider hover:bg-gray-800 transition">
              Aplicar
            </button>
          </div>

          {/* Talla (Estructural - Falta prop en JSON para funcionar) */}
          <div className="mb-8 border-b pb-4">
            <h3 className="text-xs font-bold mb-4 flex justify-between items-center cursor-pointer uppercase">
              Talla <IconChevronDown className="w-4 h-4 text-gray-400" />
            </h3>
            <div className="flex gap-2 text-xs">
              <button className="border border-gray-300 px-3 py-1 hover:border-black">S</button>
              <button className="border border-gray-300 px-3 py-1 hover:border-black">M</button>
              <button className="border border-gray-300 px-3 py-1 hover:border-black">Talla Única</button>
            </div>
          </div>

          {/* Filtro de Color */}
          <div className="mb-8 border-b pb-4">
            <h3 className="text-xs font-bold mb-4 flex justify-between items-center cursor-pointer uppercase">
              Color <IconChevronDown className="w-4 h-4 text-gray-400" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {uniqueColors.map((hex, index) => {
                const isSelected = selectedColors.includes(hex);
                return (
                  <button 
                    key={index} 
                    onClick={() => toggleColor(hex)}
                    className={`w-6 h-6 rounded-full border cursor-pointer transition-all ${
                      isSelected ? 'ring-2 ring-offset-2 ring-black border-transparent' : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                );
              })}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          
          {/* Top Toolbar */}
          <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-6 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="uppercase font-bold text-black">Visto Como</span>
              <div className="flex gap-2">
                 <button onClick={() => setViewMode(1)} className={`p-1 ${viewMode === 1 ? 'text-black' : 'text-gray-400 hover:text-black'}`}><IconViewList /></button>
                 <button onClick={() => setViewMode(2)} className={`p-1 ${viewMode === 2 ? 'text-black' : 'text-gray-400 hover:text-black'}`}><IconView2Cols /></button>
                 <button onClick={() => setViewMode(3)} className={`p-1 ${viewMode === 3 ? 'text-black' : 'text-gray-400 hover:text-black'}`}><IconView3Cols /></button>
                 <button onClick={() => setViewMode(4)} className={`p-1 ${viewMode === 4 ? 'text-black' : 'text-gray-400 hover:text-black'}`}><IconView4Cols /></button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <span className="uppercase font-bold text-black">Artículos por página</span>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border border-gray-300 px-2 py-1 outline-none text-gray-700 bg-white cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={40}>40</option>
                  <option value={60}>60</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="uppercase font-bold text-black">Ordenar por</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 px-2 py-1 outline-none text-gray-700 bg-white cursor-pointer"
                >
                  <option value="fecha">Fecha...</option>
                  <option value="asc">Precio: Menor a Mayor</option>
                  <option value="desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredAndSortedProducts.length === 0 ? (
             <div className="text-center py-20 text-gray-500">
               No hay productos que coincidan con estos filtros.
             </div>
          ) : (
            <div className={`grid gap-x-6 gap-y-10 ${gridClassNames}`}>
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className={`group flex ${viewMode === 1 ? 'flex-row gap-6 items-center text-left' : 'flex-col items-center text-center'}`}>
                  
                  {/* Imagen */}
                  <div className={`${viewMode === 1 ? 'w-48' : 'w-full'} aspect-[3/4] bg-[#f8f8f8] mb-4 overflow-hidden cursor-pointer flex-shrink-0`}>
                    <img 
                      src={product.imageUrl} 
                      alt={`Set Deportivo - ${product.color}`}
                      className="w-full h-full object-cover object-top mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Detalles */}
                  <div className={viewMode === 1 ? 'flex-1' : ''}>
                    <h3 className="text-xs text-gray-500 mb-1 cursor-pointer hover:text-black transition">
                      Set Deportivo - {product.color}
                    </h3>
                    <p className="text-sm font-bold text-black mb-3">
                      {product.price}
                    </p>
                    
                    {/* Selector de color */}
                    <div className={`flex items-center gap-2 ${viewMode === 1 ? 'justify-start' : 'justify-center'}`}>
                      <button 
                        className="w-5 h-5 rounded-full border border-gray-300 ring-1 ring-offset-2 ring-transparent hover:ring-gray-300 transition-all focus:ring-black"
                        style={{ backgroundColor: product.hex }}
                        title={product.color}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}