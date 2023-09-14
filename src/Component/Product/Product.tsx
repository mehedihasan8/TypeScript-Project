import { ProductType } from "../AllProduct";

function Product({ name, price, img }: ProductType) {
  return (
    <div className=" h-[400px]">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <p>{price}</p>
      <img className="h-2/4 w-full" src={img} alt={name} />
    </div>
  );
}

export default Product;
