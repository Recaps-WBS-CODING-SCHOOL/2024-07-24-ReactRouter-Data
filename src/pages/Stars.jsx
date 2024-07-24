// import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useOutletContext } from 'react-router-dom';

const Stars = () => {
  // const [stars, setStars] = useState([]);

  // useEffect(() => {
  //   fetch('https://stars-api-8vmk.onrender.com/stars')
  //     .then((res) => {
  //       if (res.status === 200) return res.json();
  //       else throw Error('Request failed');
  //     })
  //     .then((data) => setStars(data))
  //     .catch((err) => console.error(err));
  // }, []);
  const stars = useOutletContext();
  return (
    <>
      <div className='grid'>
        {stars.length > 0 && stars.map((star) => <Card star={star} key={`star--${star.id}`} />)}
      </div>
      <span className='scroll-thingy' role='img' aria-label='Scroll Thingy Rocket'></span>
    </>
  );
};

export default Stars;
