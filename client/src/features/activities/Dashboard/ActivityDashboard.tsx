import { Grid, List} from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityDashboard() {

    return (
        <Grid container spacing={2}>
            <Grid size={8}>
                <List>
                    <ActivityList/>
                </List>
            </Grid>
            <Grid size={4}>
                Activity Filters go here
            </Grid>
        </Grid>
    )
}