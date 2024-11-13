import Image from "next/future/image";
import Link from "next/link";
import Head from "next/head";
import { useKeenSlider } from "keen-slider/react";
import {
  CardProductDetails,
  HomeContainer,
  Product,
} from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import type { GetStaticProps } from "next";
import type Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { formatCurrency } from "../utils/formatter";
import shelfMinicartIcon from "../assets/shelf-minicart.svg";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}
export default function Home({ products }: HomeProps) {
  const { addItem, cartDetails } = useShoppingCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 1200px)": {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      "(max-width: 1000px)": {
        slides: {
          perView: 1.5,
          spacing: 48,
        },
      },
      "(max-width: 800px)": {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  });

  const handleAddToCart = async (product) => {
    addItem(product);
  };

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <CardProductDetails>
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(Number(product.price) / 100)}</span>
                  </CardProductDetails>
                  <button
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    <Image
                      src={shelfMinicartIcon}
                      width={32}
                      height={32}
                      alt="Add to Cart"
                    />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"], // como o <price> dos produtos não vem por padrão (pois este dado esta na relação da tabela de produtos com alguma tabela de prices) dizemos para a api do stripe retornar nos produtos dentro do objeto <default_price> o price para cada produto
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price; // tipando preço do produto

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  const hourInSeconds = 60 * 60;
  const revalidateTimeInSeconds = hourInSeconds * 2;

  return {
    props: {
      products,
    },
    revalidate: revalidateTimeInSeconds,
  };
};
