
const PRODUCT = [
    {
      id_product: 1,
      category_name: "Caneca",
      fk_idcategorys: 1,
      title: "Caneca Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://http2.mlstatic.com/D_NQ_NP_858781-MLB31777794699_082019-O.jpg",
      price: 30,
      id_categorys: 1,
      selected: false
    },
    {
      id_product: 2,
      category_name: "Camiseta",
      fk_idcategorys: 2,
      title: "Camiseta Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://http2.mlstatic.com/D_NQ_NP_950730-MLB45088608024_032021-O.jpg",
      price: 50,
      id_categorys: 2,
      selected: false
    },
    {
      id_product: 3,
      category_name: "Almofada",
      fk_idcategorys: 3,
      title: "Almofada Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://www.balcaodigital.com/uploads/produtos/almofada-personalizada-dia-dos-namorados-com-foto-mod-ld02-30x30-tecido-oxford-100-poliester-sublima-1621914715111313234160ac745be0154.jpg",
      price: 25,
      id_categorys: 3,
      selected: false
    },
    {
      id_product: 4,
      category_name: "Azulejo",
      fk_idcategorys: 4,
      title: "Azulejo Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://cdn.awsli.com.br/1000x1000/1221/1221152/produto/97497177/f9c9f6a79b.jpg",
      price: 28,
      id_categorys: 4,
      selected: false
    },
    {
      id_product: 5,
      category_name: "Caneca",
      fk_idcategorys: 5,
      title: "Caneca Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://images-americanas.b2w.io/produtos/4986709226/imagens/caneca-personalizada-mais-que-uma-amiga/4986709226_1_large.jpg",
      price: 30,
      id_categorys: 1,
      selected: false
    },
    {
      id_product: 6,
      category_name: "Camiseta",
      fk_idcategorys: 6,
      title: "Camiseta Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://img.elo7.com.br/product/zoom/2970630/30-camisetas-personalizada-todos-os-temas-camisa-festa-aniv-sublimacao.jpg",
      price: 50,
      id_categorys: 2,
      selected: false
    },
    {
      id_product: 7,
      category_name: "Almofada",
      fk_idcategorys: 7,
      title: "Almofada Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://images.tcdn.com.br/img/img_prod/650501/almofada_personalizada_mickey_tradicional_20x30_f_e_v_101_1_20211227090444.jpg",
      price: 25,
      id_categorys: 3,
      selected: false
    },
    {
      id_product: 8,
      category_name: "Azulejo",
      fk_idcategorys: 8,
      title: "Azulejo Personalizada",
      text: "Criamos sua caneca também! e vamos presentear aquela pessoal ESPECIAL.",
      image: "https://www.balcaodigital.com/uploads/produtos/azulejo-personalizado-frases-mod-05pd-azulejo-branco-sublimacao-colorido-2004-1630505732656804040612f8b0473417.jpg",
      price: 28,
      id_categorys: 4,
      selected: false
    },
  ];

export default function products(state = PRODUCT){
    return state;
}
