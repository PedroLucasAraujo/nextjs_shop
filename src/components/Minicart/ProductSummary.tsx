import Image from "next/future/image";

import {
  SideBarProductSummary,
  ProductSummaryProductDetails,
  ProductSummaryRemoveProduct,
  ProductSummaryProductName,
  ProductSummaryProductPrice,
  ProductSummaryProductImageWrapper,
} from "../../styles/components/minicart";
import { useShoppingCart } from "use-shopping-cart";

export function ProductSummary({ product, removeItem }: any) {
  return (
    <SideBarProductSummary>
      <ProductSummaryProductImageWrapper>
        <Image
          src="https://www.google.com/search?q=image&sca_esv=bbfe05642f884d57&rlz=1C1GCEA_enBR1130BR1130&sxsrf=ADLYWIJneSrnCT6cORHU8Ex3D8MuZ0t07w:1731170515588&udm=2&source=iu&ictx=1&vet=1&fir=fBDa6SyJOG-zHM%252CeHFEgTLzajRlNM%252C%252Fm%252F0jg24%253BQ53WJiavu6IJtM%252CWqYVql1lgUOSKM%252C_%253B2brKLR3s5kTpPM%252CExDvm63D_wCvSM%252C_%253BBfGoC8uEGxZ8aM%252Ckn-LiruHfebelM%252C_%253BT1qGjR89zLMbWM%252CbRDeKeYFo4f3uM%252C_&usg=AI4_-kSln7XsPFwpf5YN6hj5J3khXo-yUQ&sa=X&ved=2ahUKEwi5hoLd2M-JAxWjILkGHUNyAyoQ_B16BAg4EAE#vhid=fBDa6SyJOG-zHM&vssid=mosaic"
          width={100}
          height={94}
        />
      </ProductSummaryProductImageWrapper>

      <ProductSummaryProductDetails>
        <ProductSummaryProductName>{product.name}</ProductSummaryProductName>
        <ProductSummaryProductPrice>{product.price}</ProductSummaryProductPrice>
        <ProductSummaryRemoveProduct onClick={() => removeItem(product.id)}>
          Remover
        </ProductSummaryRemoveProduct>
      </ProductSummaryProductDetails>
    </SideBarProductSummary>
  );
}
