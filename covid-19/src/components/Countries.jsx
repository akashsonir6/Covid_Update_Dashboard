import { Typography, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../sevice/api";


const Countries = ({ handleCountryChange }) => {

    const [countries, SetCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {

            SetCountries(await fetchCountries());
        }
        fetchApi();
    }, [])

    return (
        <>
            <Typography style={{ marginBottom: 20, fontSize: '3vw'}} variant="h4" color="textSecondary">
                Reported Cases or Deaths by Countries or Territoty
        </Typography>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="" >Worldwide</option>
                {countries.map((country, i) => {
                    return (
                        <option key={i} value={country}>{country}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Countries;
