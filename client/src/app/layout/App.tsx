import { Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";

function App() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data))
    }, [])

    return (
        <>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                <ActivityDashboard activities={activities} />
            </Container>
        </>
    )
}



export default App
