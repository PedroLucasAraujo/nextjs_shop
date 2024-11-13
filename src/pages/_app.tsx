import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";

import { Container, Header } from "../styles/pages/app";

import Image from "next/future/image";
import { Minicart } from "../components/Minicart/index";
import { CartProvider } from "use-shopping-cart";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <Minicart />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
