import Link from "next/link";
import { ImageContainer } from "../styles/pages/product";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>Camiseta Beyond the limits</strong>
        já está a caminho a da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
