import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  "@media(max-width: 1250px)": {
    padding: "2rem",
  },
});

export const HeaderLink = styled("a", {
  textDecoration: "none",
});
