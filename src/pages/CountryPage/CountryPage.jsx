import React from 'react';
import {useQuery} from 'react-query'
//styles
import './CountryPage.scss';



const getCountry = async () =>
  await (await fetch(`https://restcountries.com/v2/name/Belgique`)).json();

export default function CountryPage() {

    const { data, isLoading, error} = useQuery('country',getCountry);
 
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    console.log(data)

    return <div>
        sup
    </div>;
}
