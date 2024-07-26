import { Header } from "./Header";
import { Footer } from "./Footer";
// import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

// import { grey } from "@mui/material/colors";

function Layout({ children }) {
  return (
    <Stack sx={{ minHeight: "100%" }}>
      {/* <CssBaseline /> */}
      <Header />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "airCall.greyPrime",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Stack>
  );
}

export default Layout;
