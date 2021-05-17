import { Box, CardContent, Grid, Typography, Card, makeStyles } from "@material-ui/core";
import Countup from 'react-countup';

const useStyle = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
})

const Cardcomponent = ({ cardtitle, value, desc, lastUpdate }) => {
    const classes = useStyle();
    return (
        <Grid component={Card} style={{ margin: 20, borderBottom: '10px solid red' }}>
            <Box className={classes.header}>
                <Typography variant='h5' color="textSecondary">{cardtitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant='h5'>
                    <Countup start={0} end={value} duration={2} separator="," />

                </Typography>
                <Typography>{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>

        </Grid>

    )
}
export default Cardcomponent;
