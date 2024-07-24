/* eslint-disable react/prop-types */
import { Form } from 'react-router-dom';

export default function UpdateForm() {
  return (
    <Form className='starPage__form' method='PUT'>
      <div className='field'>
        <label htmlFor='heading'>Heading</label>
        <input type='text' name='heading' id='heading' />
      </div>
      <div className='field'>
        <label htmlFor='description'>Description</label>
        <textarea name='description' id='description' cols='30' rows='10'></textarea>
      </div>
      <button>Update</button>
    </Form>
  );
}
