import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import Homepage from "../../features/home/Homepage";

function App() {

    const location = useLocation();

    return (
        <Box sx={{ bgcolor: "#eeeeed", minHeight: '200vh' }}>
            <CssBaseline />
            {location.pathname === '/' ? <Homepage /> :
            (
            <>
                <NavBar />
                <Container maxWidth="xl" sx={{ mt: 3 }}>
                    <Outlet></Outlet>
                </Container>

            </>
            ) }
        </Box>
    )
}

export default App
