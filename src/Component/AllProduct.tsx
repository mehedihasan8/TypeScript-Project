import Product from "./Product/Product";

export type ProductType = {
  id: number;
  category: string;
  name: string;
  seller: string;
  price: number;
  stock: number;
  ratings: number;
  shipping: number;
  quantity: number;
  ratingsCount: number;
  img: string;
};

function AllProduct() {
  const products: ProductType[] = [
    {
      id: 1,
      category: "Men's Sneaker",
      name: "ULTRABOOST 22 SHOES",
      seller: "Addidas",
      price: 420,
      stock: 20,
      ratings: 4,
      ratingsCount: 3725,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      shipping: 99,
      quantity: 0,
    },
    {
      id: 2,
      category: "Men's Watch",
      name: "Rolex Explorer II",
      seller: "Rolex",
      price: 896,
      stock: 19,
      ratings: 5,
      ratingsCount: 4355,
      img: "https://content.rolex.com/v7/dam/collection/watches-grid/popin-cards/m136660-0003/m136660-0003_v01.jpg?imwidth=1920",
      shipping: 56,
      quantity: 0,
    },
    {
      id: 3,
      category: "Men's Sneaker",
      name: "SUPERNOVA SHOES",
      seller: "Addidas",
      price: 245,
      stock: 20,
      ratings: 4,
      ratingsCount: 3972,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
      shipping: 5,
      quantity: 0,
    },
    {
      id: 4,
      category: "Men's Sneaker",
      name: "LITE RACER ADAPT 3.0 SHOES",
      seller: "Addidas",
      price: 229,
      stock: 10,
      ratings: 5,
      ratingsCount: 1764,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
      shipping: 32,
      quantity: 0,
    },
    {
      id: 5,
      category: "Men's Watch",
      name: "Rolex Submariner",
      seller: "Rolex",
      price: 587,
      stock: 11,
      ratings: 4,
      ratingsCount: 799,
      img: "https://content.rolex.com/v7/dam/collection/watches-grid/popin-cards/m124060-0001/m124060-0001_v04.jpg?imwidth=1920",
      shipping: 49,
      quantity: 0,
    },
    {
      id: 6,
      category: "Men's Sneaker",
      name: "KAPTIR 2.0 SHOES",
      seller: "Addidas",
      price: 138,
      stock: 19,
      ratings: 3,
      ratingsCount: 4372,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
      shipping: 19,
      quantity: 0,
    },
    {
      id: 7,
      category: "Men's Sneaker",
      name: "4DFWD PULSE SHOES",
      seller: "Addidas",
      price: 226,
      stock: 1,
      ratings: 4,
      ratingsCount: 2870,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
      shipping: 15,
      quantity: 0,
    },
    {
      id: 8,
      category: "Men's Watch",
      name: "Rolex Daytona",
      seller: "Rolex",
      price: 319,
      stock: 8,
      ratings: 4,
      ratingsCount: 1360,
      img: "https://content.rolex.com/v7/dam/collection/watches-grid/popin-cards/m124060-0001/m124060-0001_v07.jpg?imwidth=1920",
      shipping: 50,
      quantity: 0,
    },
    {
      id: 9,
      category: "Men's Sneaker",
      name: "NMD_R1 V2 SHOES",
      seller: "Addidas",
      price: 260,
      stock: 4,
      ratings: 5,
      ratingsCount: 1976,
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
      shipping: 46,
      quantity: 0,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        {products.map((product) => (
          <Product
            category={product.category}
            name={product.name}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
}

export default AllProduct;
