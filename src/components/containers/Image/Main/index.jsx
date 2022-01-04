import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Header,
  Navbar,
  Footer,
} from '@components/layout';
import {
  SearchForm,
} from '@components/commons';
import { useForm } from '@hooks';
import { fetchImageById } from '@services/images';
import Picture from '../Picture/Main';
import Data from '../Data/Main';
import { loadPhoto } from '@redux/photo';
import { formatImageData } from '@utils/formatData';

const style = {
  main: {
    width: '95%',
    maxWidth: '81.5rem',
  },
}

const Image = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { keyword, handleChange, handleSubmit } = useForm();

  useEffect(() => {
    fetchImageById(id)
      .then(data => {
        const image = formatImageData(data.data);
        dispatch(loadPhoto(image));
      })
      .catch(console.log)

    return () => dispatch(loadPhoto({}));
  }, [id, dispatch]);

  return (
    <>
      <Header>
        <Navbar className="bg-info">
          <li className="nav-link">
            <SearchForm
              {... {
                keyword,
                handleChange,
                handleSubmit
              }}
            />
          </li>
        </Navbar>
      </Header>
      <main
        className="my-5 mx-auto container"
        style={style.main}
      >
        <div className="row justify-content-sm-between">
          <div className="col-12 col-md-6 col-lg-7 mb-3 mb-md-0">
            <Picture />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <Data />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Image;