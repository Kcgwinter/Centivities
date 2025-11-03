import { Grid, List} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "../details/ActivityFilters";

export default function ActivityDashboard() {

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <List>
                    <ActivityList/>
                </List>
            </Grid>
            <Grid size={4}>
                <ActivityFilters />
            </Grid>
        </Grid>
    )
}