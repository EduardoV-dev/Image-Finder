import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Heading from '../Heading'
import Form from '../Form';
import PhotosList from '../Photos/List';
import {
  Header,
  Navbar,
  Footer,
} from '@components/layout';
import { SearchForm } from '@components/commons';
import useForm from '../../../../hooks/useForm';

const Home = () => {
  const { keyword, handleChange, handleSubmit } = useForm();
  const [showNavbar, setShowNavbar] = useState(false);
  const spring = useSpring({
    opacity: showNavbar ? 1 : 0,
    transform: `scale(${showNavbar ? 1 : 0})`,
  });

  useEffect(() => {
    const onScroll = () => setShowNavbar(window.scrollY >= 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header>
        <Navbar>
          {showNavbar && (
            <animated.div style={spring}>
              <li className="nav-link">
                <SearchForm
                  {...{
                    keyword,
                    handleChange,
                    handleSubmit
                  }}
                />
              </li>
            </animated.div>
          )}
        </Navbar>
      </Header>
      <main className="mb-5">
        <Heading />
        <Form
          {...{
            keyword,
            handleChange,
            handleSubmit
          }}
        />
        <PhotosList />
      </main>
      <Footer />
    </>
  );
}

export default Home;