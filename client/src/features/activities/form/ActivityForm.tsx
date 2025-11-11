import { Box, Button, Paper, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useParams } from "react-router";
import { useForm, type FieldValues } from 'react-hook-form';
import { useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import type { Resolver } from 'react-hook-form';
import { activitySchema, type ActivitySchema } from "../../../lib/schemas/activitySchema";
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./categoryOptions";
import DateTimeInput from "../../../app/shared/components/DateTimeInput";

export default function ActivityForm() {

    const { control, reset, handleSubmit } = useForm<ActivitySchema>(
        {
            mode: "onTouched",
            resolver: zodResolver(activitySchema) as Resolver<ActivitySchema>
        }
    );
    const { id, isLoadingActivity } = useParams()
    const { updateActivitiy, createActivity, activity } = useActivities(id);

    useEffect(() => {
        if (activity) reset(activity)
    }, [activity, reset])

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    if (isLoadingActivity) return <Typography>Loading ...</Typography>

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            {activity ? <Typography variant="h5" gutterBottom color="primary">Edit Activity</Typography> : <Typography variant="h5" gutterBottom color="primary">Create Activity</Typography>}
            <Box component={"form"} onSubmit={handleSubmit(onSubmit)} display={"flex"} flexDirection={"column"} gap={3}>
                <TextInput label='Title' control={control} name='title' />
                <TextInput label='Description' control={control} name='description' multiline rows={3} />
                <SelectInput label='Category' control={control} name='category' items={categoryOptions} />
                <DateTimeInput label='Date' control={control} name='date' />
                <TextInput label='City' control={control} name='city' />
                <TextInput label='Venue' control={control} name='venue' />

                <Box display={"flex"} justifyContent={"end"} gap={3}>
                    <Button color="inherit">Cancel</Button>
                    <Button
                        type="submit"
                        color="success"
                        variant="contained"
                        disabled={updateActivitiy.isPending || createActivity.isPending}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}