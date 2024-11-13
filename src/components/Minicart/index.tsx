import Image from "next/future/image";
import * as Sidebar from "@radix-ui/react-dialog";
import minicartIcon from "../../assets/minicart.svg";

import {
  MinicartButton,
  MinicartButtonQuantity,
  MinicartButtonQuantityWrapper,
  SideBarCloseButton,
  SidebarWrapper,
  SidebarContentHeader,
  SidebarOverlay,
  SidebarContent,
  SidebarFooter,
  ProductSummaryWrapper,
  EmptyCartMessageWrapper,
} from "../../styles/components/minicart";

import { ShoppingCart, X } from "lucide-react";
import { ProductSummary } from "./ProductSummary";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import axios from "axios";
import { formatCurrency } from "../../utils/formatter";

export function Minicart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { removeItem, cartDetails } = useShoppingCart();
  const products: any[] = Object.keys(cartDetails).map(
    (item) => cartDetails[item]
  );
  const totalOrderValue = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: products,
      });

      const { checkoutUrl } = response.data;

      //REDIRECIONANDO PARA PÁGINA EXTERNA
      if (typeof window !== undefined) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Sidebar.Root>
      <Sidebar.Trigger asChild>
        <MinicartButton>
          <Image src={minicartIcon} width={24} height={24} alt="Carrinho" />
          <MinicartButtonQuantityWrapper>
            <MinicartButtonQuantity>{products.length}</MinicartButtonQuantity>
          </MinicartButtonQuantityWrapper>
        </MinicartButton>
      </Sidebar.Trigger>
      <Sidebar.Portal>
        <SidebarOverlay />
        <SidebarWrapper>
          <SidebarContentHeader>
            <SideBarCloseButton>
              <X size={24} />
            </SideBarCloseButton>
          </SidebarContentHeader>

          <SidebarContent>
            {products.length > 0 ? (
              <>
                <Sidebar.Title>Sacola de compras</Sidebar.Title>
                <ProductSummaryWrapper>
                  {products.map((product) => {
                    return (
                      <ProductSummary
                        key={product.id}
                        product={product}
                        removeItem={removeItem}
                      />
                    );
                  })}{" "}
                </ProductSummaryWrapper>
                <SidebarFooter>
                  <table>
                    <thead>
                      <tr>
                        <th>Quantidade</th>
                        <th>Valor Total: </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{products.length}</td>
                        <td>{formatCurrency(totalOrderValue / 100)}</td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    onClick={handleCheckout}
                    disabled={isCreatingCheckoutSession}
                  >
                    Finalizar compra
                  </button>
                </SidebarFooter>
              </>
            ) : (
              <EmptyCartMessageWrapper>
                <ShoppingCart size={64} />
                <p>
                  Você ainda não possui produtos no carrinho, vamos comprar?
                </p>
              </EmptyCartMessageWrapper>
            )}
          </SidebarContent>
        </SidebarWrapper>
      </Sidebar.Portal>
    </Sidebar.Root>
  );
}
