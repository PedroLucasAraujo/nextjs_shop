import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import Image from "next/future/image";
export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image /> */}</ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 100,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          deleniti, quos labore officiis doloremque ad incidunt quasi aliquid
          rem, recusandae, minus maxime architecto? Minus voluptates delectus
          distinctio facilis magnam dolor!
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
