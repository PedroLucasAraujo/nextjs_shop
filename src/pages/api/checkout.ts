import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: any[] };

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed!" });
  }

  if (!products) {
    return res.status(400).json({ error: "Products not founded!" });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  console.log(products, "products");

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl, // Redirecionar para rota/url de compra concluida
    cancel_url: cancelUrl, // Redirecionar para rota/url de compra cancelada
    mode: "payment", // tipo de compra (payment = pagou uma vez só pelo produto)

    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: product.quantity,
    })),
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
