import { Grid, List } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
}


export default function ActivityDashboard({ activities }: Props) {
    return (
        <Grid container spacing={2}>
            <Grid size={8}>
                <List>
                    <ActivityList activities={activities} />
                </List>
            </Grid>
            <Grid size={4}>
                {activities[0] && <ActivityDetails activity={activities[0]} />}

                <ActivityForm></ActivityForm>
            </Grid>
        </Grid>
    )
}