import { useOutletContext } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import UpdateForm from '../components/UpdateForm';

// can be put in it's own /data/actions.js file
export const updateStar = async ({ params, request }) => {
  const id = params.id;
  const data = Object.fromEntries(await request.formData());
  return fetch(`https://stars-api-8vmk.onrender.com/stars/${id}`, {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const SingleStar = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { id } = useParams();
  // const [star, setStar] = useState(null);
  // useEffect(() => {
  //   fetch(`https://stars-api-8vmk.onrender.com/stars/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setStar(data));
  // }, [id]);
  const stars = useOutletContext();
  const star = stars.find((star) => star.id === +id);
  return (
    <>
      {star && (
        <Link to='/' state={star} className='star' data-feature={star.featured}>
          <img src={star.url} alt={star.heading} className='star__img' />
          <h3 className='star__heading'>{star.heading}</h3>
          <p className='star__description'>{star.description}</p>
        </Link>
      )}
      <button className='btn--update' onClick={() => setShowUpdateForm((prev) => !prev)}>
        <span className=''>{showUpdateForm ? 'cancel' : 'edit note'}</span>
      </button>
      {showUpdateForm && <UpdateForm />}
    </>
  );
};

export default SingleStar;
