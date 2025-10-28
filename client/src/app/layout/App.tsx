import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
    return (
        <Box sx={{ bgcolor: "#eeeeed", minHeight: '200vh' }}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                    <Outlet></Outlet>
            </Container>
        </Box>
    )
}

export default App
