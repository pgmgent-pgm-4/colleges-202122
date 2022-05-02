import { useEffect, useState } from 'react';
import { AlertDanger } from './Alert';
import useFetch from '../hooks/useFetch';

const BEER_API_RANDOMBEER = 'https://random-data-api.com/api/beer/random_beer';

const BeerRandom = () => {
  // const [beer, setBeer] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (beer === null) {
  //     // fetch(BEER_API_RANDOMBEER)
  //     // .then(response => {
  //     //   if(!response.ok) {
  //     //     throw Error(response.statusText);
  //     //   }
  //     //   return response.json();
  //     // })
  //     // .then(data => {
  //     //   setBeer(data);
  //     // })
  //     // .catch(error => {
  //     //   setError(error);
  //     // })
  //     // .finally(() => {
  //     //   setIsLoading(false);
  //     // });
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(BEER_API_RANDOMBEER);
  //         if(!response.ok) {
  //           throw Error(response.statusText);
  //         }
  //         const data = await response.json();
  //         setBeer(data);
  //       }
  //       catch(error) {
  //         setError(error);
  //       }
  //       finally {
  //         setIsLoading(false);
  //       }
  //     }
  //     fetchData();
  //   }
  // }, []);

  const [data, error, isLoading] = useFetch(BEER_API_RANDOMBEER);

  return (
    <>
      {isLoading && <iframe src="https://giphy.com/embed/N0o7zkeFarZVm" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>}
      {error && <AlertDanger title="Error" message={error.message}/>}
      {data && 
        <div className="beer" data-uid={data.uid}>
          <h2>{data.name}</h2>
          <h3>{data.brand}</h3>
          <p>{data.style}</p>
          <p>{data.hop}</p>
          <p>{data.alcohol}</p>
        </div>
      }
    </>
  )
};

export default BeerRandom;

/*
{"id":9724,"uid":"ee942938-6bb7-404c-a825-a1a586188980","brand":"Hoegaarden","name":"Double Bastard Ale","style":"Pilsner","hop":"Fuggle","yeast":"3638 - Bavarian Wheat","malts":"Black malt","ibu":"68 IBU","alcohol":"8.2%","blg":"8.7°Blg"}
*/