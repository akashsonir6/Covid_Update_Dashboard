
import { Box, makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';


const useStyle = makeStyles({
    container: {
        width: '75%',
        marginTop: 20



    }
})

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
    const classes = useStyle();
    return (
        <Box className={classes.container}>

            {confirmed ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'Peoples',
                            data: [confirmed.value, recovered.value, deaths.value],
                            backgroundColor: [
                                'rgba(255,0,0, 0.6)',
                                'rgba(0, 180, 0, 0.6)',
                                'rgba(118, 118, 118, 1)',

                            ],


                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: 'Current state in country' }
                    }}


                />) : ''
            }
        </Box>
    )

}
export default Chart;