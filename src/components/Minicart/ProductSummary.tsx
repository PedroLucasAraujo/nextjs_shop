import Image from "next/future/image";

import {
  SideBarProductSummary,
  ProductSummaryProductDetails,
  ProductSummaryRemoveProduct,
  ProductSummaryProductName,
  ProductSummaryProductPrice,
  ProductSummaryProductImageWrapper,
} from "../../styles/components/minicart";
import { formatCurrency } from "../../utils/formatter";

export function ProductSummary({ product, removeItem }: any) {
  return (
    <SideBarProductSummary>
      <ProductSummaryProductImageWrapper>
        <Image src={product.imageUrl} width={100} height={94} />
      </ProductSummaryProductImageWrapper>

      <ProductSummaryProductDetails>
        <ProductSummaryProductName>{product.name}</ProductSummaryProductName>
        <ProductSummaryProductPrice>
          {formatCurrency(product.price / 100)}
        </ProductSummaryProductPrice>
        <ProductSummaryRemoveProduct onClick={() => removeItem(product.id)}>
          Remover
        </ProductSummaryRemoveProduct>
      </ProductSummaryProductDetails>
    </SideBarProductSummary>
  );
}
