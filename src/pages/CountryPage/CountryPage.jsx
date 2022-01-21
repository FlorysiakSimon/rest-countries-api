import React from 'react';
import { useQuery} from 'react-query'
import { useParams, NavLink } from 'react-router-dom';
import CountryInfos from '../../components/CountryInfos/CountryInfos';
//styles
import './CountryPage.scss';





export default function CountryPage() {

   
    const { name } = useParams();
    const getCountry = async () =>
      await (await fetch(`https://restcountries.com/v2/alpha/${name}`)).json();

    const { data, isLoading, error} = useQuery('country',getCountry);

    console.log(data)
    
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    
    return (
      <>
        <div id="nav">
          <NavLink to="/" id="backLink"><i className="fas fa-arrow-left"></i><span>Back</span></NavLink>
        </div>
        <CountryInfos data={data} />
      </>
    );
}
