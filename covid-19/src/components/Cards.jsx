
import { makeStyles, Box, Typography, CircularProgress, Grid, } from "@material-ui/core";
import Card from './Card';

const useStyles = makeStyles({
    container: {
        //color: '#BACA2B',
        fontSize: 25,
        color: "Red",
        // fontStyle: 'itali',
        //font-style: oblique
    },
    component: {
        margin: '50px 0',// top and bottom
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center'
    },
})
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
    const classes = useStyles();
    if (!confirmed) {
        return <CircularProgress color="secondary" />
    }
    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant="h4" gutterBottom>World Wide (C😈VID-19) Cases Dashboard</Typography>
            <Grid container spacing={3} justify="center" >

                <Card

                    cardtitle="Infected"
                    value={confirmed.value}
                    desc="Number of Infected Cases of Covid-19"
                    lastUpdate={lastUpdate}
                />

                <Card
                    cardtitle="Recoverd"
                    value={recovered.value}
                    desc="Number of Recoverd from Covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardtitle="Deaths"
                    value={deaths.value}
                    desc="Number of Deaths Caused by Covid-19"
                    lastUpdate={lastUpdate}
                />
            </Grid>
        </Box>

    )
}
export default Cards;