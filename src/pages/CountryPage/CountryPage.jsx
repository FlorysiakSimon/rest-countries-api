import React, {useState,useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom';
import CountryInfos from '../../components/CountryInfos/CountryInfos';
import { getCountry,getAllCountries } from '../../services/data';
//styles
import './CountryPage.scss';





export default function CountryPage() {

    const [data, setData] = useState([]);
    const {name} = useParams();
    const [border,getBorder] =useState([]);


    useEffect(() => {
      const getData = async () => {
        const request = await getAllCountries();
        if (!request) return alert('data error');
        setData(request);
      };
      getBorder();
    }, []);


      
    useEffect(() => {
      const getData = async () => {
        const request = await getCountry(name);
        if (!request) return alert('data error');
        setData(request);
      };
      getData();
    }, [name]);
    if (data.length === 0) return null;
    
     console.log(data);
    return (
      <>
        <div id="nav">
          <NavLink to="/" id="backLink"><i className="fas fa-arrow-left"></i><span>Back</span></NavLink>
        </div>
        <CountryInfos data={data} />
      </>
    );
}
