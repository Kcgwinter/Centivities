import { Box, Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useQuery } from "@tanstack/react-query";

function App() {

    const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
    const [editMode, setEditMode] = useState(false);

    const {data : activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await axios.get<Activity[]>('https://localhost:5001/api/activities');
            return response.data
        }
    })


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

    const handleSubmitForm = (activity: Activity) => {
        // if (activity.id) {
        //     setActivities(activities!.map(x => x.id === activity.id ? activity : x))
        // }
        // else {
        //     const newActivity = { ...activity, id: activities!.length.toString() }
        //     setActivities([...activities!, { ...newActivity }])
        // }
        console.log(activity)
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
                    submitForm={handleSubmitForm}
                    deleteActivity={handleDeleteActivity}
                />
                )}
            </Container>
        </Box>
    )
}



export default App
