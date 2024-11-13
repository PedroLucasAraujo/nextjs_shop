import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "..";
import Image from "next/future/image";
import { text } from "stream/consumers";

export const MinicartButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 48,
  height: 48,

  background: "$gray800",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",
  border: 0,
});

export const MinicartButtonQuantityWrapper = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 30,
  height: 30,

  background: "$gray900",
  borderRadius: 1000,
  position: "absolute",
  top: "-11px",
  right: "-14px",
});

export const MinicartButtonQuantity = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 24,
  height: 24,

  background: "$green500",
  borderRadius: 1000,
  color: "$white",

  fontWeight: 700,
});

const slideIn = keyframes({
  "0%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0)" },
});

const slideOut = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(100%)" },
});

export const SidebarOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
});

export const SidebarWrapper = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100%",
  width: 480,
  backgroundColor: "$gray800",
  boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
  overflowY: "auto",
  padding: "1.5rem 3rem 3rem 3rem",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
  animation: `${slideIn} 300ms ease-out`,
  '&[data-state="closed"]': {
    animation: `${slideOut} 300ms ease-in`,
  },

  "@media(max-width: 1250px)": {
    width: "100%",
  },
});

export const SideBarCloseButton = styled(Dialog.Close, {
  background: "transparent",
  border: 0,
  color: "#8D8D99",
});

export const SidebarContentHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const SidebarContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  height: "100%",

  h2: {
    margin: "28px 0 32px",
  },
});

export const SideBarProductSummary = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
});

export const ProductSummaryProductDetails = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
});

export const ProductSummaryWrapper = styled("div", {
  maxHeight: "calc(100vh - 395px)",
  overflowY: "scroll",
  transition: "all 0.2s ease-in-out",
  gap: 16,
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "&::-webkit-scrollbar": {
    width: "4px",
  },

  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$green300",
    borderRadius: "4px",
    cursor: "pointer",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "$green500",
  },

  "&::-webkit-scrollbar-thumb:active": {
    background: "$green500",
  },
});

export const ProductSummaryRemoveProduct = styled("button", {
  background: "none",
  color: "$green300",
  fontSize: "1rem",
  fontWeight: 700,
  lineHeight: 1.6,
  cursor: "pointer",
  border: 0,
  padding: 0,
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const ProductSummaryProductName = styled("h3", {
  fontSize: "1.15rem",
  fontWeight: 400,
  lineHeight: 1.6,
  color: "$gray300",
  margin: "0 0 2px",
  width: "95%",
});

export const ProductSummaryProductPrice = styled("span", {
  fontSize: "1.15rem",
  fontWeight: 700,
  lineHeight: 1.6,
  color: "$gray300",
  margin: "0 0 8px",
});

export const ProductSummaryProductImageWrapper = styled("div", {
  width: 100,
  height: 94,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  img: {
    objectFit: "cover",
    borderRadius: 8,
    border: 0,
  },
});

export const SidebarFooter = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4rem",
  paddingTop: "24px",
  marginTop: "auto",

  table: {
    width: "100%",
    display: "flex",

    tr: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },

    thead: {
      width: "100%",

      tr: {
        textAlign: "left",
      },
    },

    tbody: {
      width: "100%",

      tr: {
        textAlign: "right",
      },
    },
  },

  button: {
    background: "$green500",
    border: 0,
    borderRadius: 8,
    color: "$white",
    width: "100%",
    height: 69,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: 1.6,
    cursor: "pointer",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
      transition: "all 0.1s ease-in-out",
    },
  },
});

export const EmptyCartMessageWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",

  p: {
    color: "$gray300",
    fontSize: "1.125rem",
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: "center",
    maxWidth: 560,
  },
});
