export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "aceite-5w30",
    title: "Aceite 5w30",
    category: "Lubricantes",
    price: "50.00",
    image: "/images/products/xtc-syntronic-5w30-5l-c3-mb-bmw-300x300.jpg",
    description: "XTC SYNTRONIC 5W30 5L."
  },
  {
    id: "aceite-5w40",
    title: "Aceite 5w40",
    category: "Lubricantes",
    price: "45.00",
    image: "/images/products/xtra-5w40-50501-5l-300x300.jpg",
    description: "ACEA C3, API SN, BMW Longlife-04, VW 505.01, MB 229.51"
  },
  {
    id: "antihumos-diesel-itv",
    title: "Antihumos diesel ITV",
    category: "Aditivos",
    price: "15.00",
    image: "/images/products/diesel-stop-smoke-itv-300ml-300x300.jpg",
    description: "Reduce los humos contaminantes y prepara el vehículo para las pruebas de contaminación de la inspección técnica."
  },
  {
    id: "antinsecto",
    title: "ANTINSECTO 250 ML",
    category: "Limpieza y Detail",
    price: "3.50",
    image: "/images/products/antinsecto-250-ml-1-e1630917901194-300x300.png",
    description: "ANTINSECTO 250ml."
  },
  {
    id: "engine-flush",
    title: "Engine Flush",
    category: "Aditivos",
    price: "13.00",
    image: "/images/products/engine-flush-300ml-300x300.jpg",
    description: "Limpiador de circuitos de aceite para motores gasolina y diesel."
  },
  {
    id: "limpiador-inyectores",
    title: "Limpiador de inyectores",
    category: "Aditivos",
    price: "20.00",
    image: "/images/products/limp-inyectores-gasolina-500-ml-e1630748875332-300x300.jpg",
    description: "Limpiador de inyectores."
  },
  {
    id: "lubricante-moto",
    title: "Lubricante Moto 10W40 1L",
    category: "Lubricantes",
    price: "20.00",
    image: "/images/products/xt-s-10w40-moto-1l-300x300.png",
    description: "Lubricante especial destinado a los usuarios más exigentes, probado en el campo de la competición de motor."
  },
  {
    id: "maxi-compression",
    title: "Maxi-compression",
    category: "Aditivos",
    price: "28.00",
    image: "/images/products/maxi-compression-500-ml-300x300.jpg",
    description: "MAXI-COMPRESSION es un nuevo aditivo concebido para reforzar la viscosidad de los aceites a temperatura alta y, de la misma manera, aumentar las compresiones del motor."
  },
  {
    id: "tratamiento-antifriccion",
    title: "Tratamiento antifricción",
    category: "Aditivos",
    price: "35.00",
    image: "/images/products/b2-oil-treatment-300ml-300x300.jpg",
    description: "Tratamiento de aceite antifricción."
  }
];

export const categories = ["Todos", "Aditivos", "Lubricantes", "Limpieza y Detail"];
