import React from 'react';
import { NavLink } from 'react-router-dom';
import './CountryInfos.scss'

export default function CountryInfos({data}) {
  return (
    <>
        <section id="country">
            <div id="flag">
            <img src={data.flag} alt="flag" />
            </div>
            <div id="infos">
                <h2>{data.name}</h2>
                <div className="section">
                <div className="sectionleft">
                    <p><span>Nativa Name: </span>{data.nativeName}</p>
                    <p><span>Population: </span>{data.population}</p>
                    <p><span>Region: </span>{data.region}</p>
                    <p><span>Sub Region: </span>{data.subregion}</p>
                    <p><span>Capital: </span>{data.capital}</p>
                </div>
                <div className="sectionright">
                    <p><span>Top Level Domain: </span>{data.topLevelDomain}</p>
                    <p><span>Currencies: </span>{data.currencies.map((item,index)=>{return item.name})}</p>
                    <p><span>Languages: </span>{data.languages.map((item,index)=>{return item.name})}</p>
                </div>
                </div>
                <p id="borderscountries"><span>Border Countries: </span>
                    {data.borders.map((item,index)=>{
                        return <NavLink className="borders" to={`/${item}`} key={index}>{item}</NavLink>
                        }
                    )}
                </p>
            </div>
        </section>
    </>
  );
}
