import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-10-28.acacia", // data sugerida de forma automática
  appInfo: {
    // informações opcionais que podemos adicionar ao realizar as requisições à api do stripe
    name: "Ignite Shop",
  },
});
