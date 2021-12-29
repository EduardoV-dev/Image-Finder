import { Header, Footer } from '@components/layout';
import Heading from '../Heading'
import Form from '../Form';
import PhotosList from '../PhotosList';

import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <Header
        className={`d-flex flex-column justify-content-center align-items-center ${styles.header}`}
      >
        <Heading />
      </Header>
      <main>
        <Form />
        <PhotosList />
      </main>
      <Footer 
        className="mt-5"
      />
    </>
  );
}

export default Home;