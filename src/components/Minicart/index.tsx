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
} from "../../styles/components/minicart";

import { X } from "lucide-react";
import { ProductSummary } from "./ProductSummary";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import axios from "axios";

export function Minicart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { removeItem, cartDetails } = useShoppingCart();
  const products: any[] = Object.keys(cartDetails).map(
    (item) => cartDetails[item]
  );

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
              })}
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
                    <td>3</td>
                    <td>270,00</td>
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
          </SidebarContent>
        </SidebarWrapper>
      </Sidebar.Portal>
    </Sidebar.Root>
  );
}
