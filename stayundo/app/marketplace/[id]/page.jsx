import { notFound } from "next/navigation";
import { products } from "../../data/marketplaceData";
import ProductDetails from "./product-details";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
