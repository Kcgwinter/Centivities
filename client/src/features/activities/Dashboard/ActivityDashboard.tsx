import { Grid, List } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id:string) => void;
    closeForm: () => void;
    editMode: boolean;
}


export default function ActivityDashboard({ activities, cancelSelectActivity,selectActivity,selectedActivity,   openForm,closeForm,editMode }: Props) {
    return (
        <Grid container spacing={2}>
            <Grid size={8}>
                <List>
                    <ActivityList activities={activities} 
                    selectActivity={selectActivity}
                    />
                </List>
            </Grid>
            <Grid size={4}>
                {selectedActivity && !editMode &&
                <ActivityDetails activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm = {openForm}

                />}
                {editMode &&

                <ActivityForm closeForm={closeForm}/> }
            </Grid>
        </Grid>
    )
}