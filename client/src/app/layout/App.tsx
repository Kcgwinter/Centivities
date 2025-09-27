import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import axios from "axios";
import {   useEffect, useState } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {

    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:5001/api/activities')
            .then(response => setActivities(response.data))
    }, [])


    const handleSelectedActivity = (id: string) => {
        setSelectedActivity(activities.find(x => x.id === id));
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
        if(activity.id) {
            setActivities(activities.map(x => x.id === activity.id ? activity : x))
             }
            else {
                const newActivity = {...activity, id:activities.length.toString()}
                setActivities([...activities, {...newActivity}])
            }
            setEditMode(false);
    }

    const handleDeleteActivity = (id : string) =>
    {
        setActivities(activities.filter(x => x.id !== id))
    }

    return (
        <Box sx={{ bgcolor: "#eeeeed" }}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm} />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
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
            </Container>
        </Box>
    )
}



export default App
