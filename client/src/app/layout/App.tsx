import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {

    const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
    const [editMode, setEditMode] = useState(false);
    const { activities, isPending } = useActivities();

    const handleSelectedActivity = (id: string) => {
        setSelectedActivity(activities!.find(x => x.id === id));
    }
    const handleCancelSelectedActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleOpenForm = (id?: string) => {
        if (id) handleSelectedActivity(id);
        else handleCancelSelectedActivity();
        setEditMode(true);
    }
    const handleCloseForm = () => {
        setEditMode(false);
    }


    const handleDeleteActivity = (id: string) => {

        console.log(id);
    }

    return (
        <Box sx={{ bgcolor: "#eeeeed", minHeight: '200vh' }}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm} />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
                {!activities || isPending ? (
                    <Typography>Loading ...</Typography>
                ) : (
                    <ActivityDashboard activities={activities}
                        selectActivity={handleSelectedActivity}
                        cancelSelectActivity={handleCancelSelectedActivity}
                        selectedActivity={selectActivity}
                        editMode={editMode}
                        openForm={handleOpenForm}
                        closeForm={handleCloseForm}
                        deleteActivity={handleDeleteActivity}
                    />
                )}
            </Container>
        </Box>
    )
}



export default App
