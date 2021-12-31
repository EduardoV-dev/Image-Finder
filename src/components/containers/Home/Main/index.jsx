import { animated } from 'react-spring';

import Heading from '../Heading'
import Form from '../Form';
import PhotosList from '../Photos/List';
import {
  Header,
  Navbar,
  Footer,
} from '@components/layout';
import { SearchForm, ScrollToTop } from '@components/commons';
import { SCROLLY_TO_RENDER_NAVBAR } from '@consts/ui';
import { useForm, useScaleAnimationOnScroll } from '@hooks';

const Home = () => {
  const { keyword, handleChange, handleSubmit } = useForm();
  const { show, spring } = useScaleAnimationOnScroll(SCROLLY_TO_RENDER_NAVBAR);

  return (
    <>
      <Header>
        <Navbar>
          {show && (
            <animated.li
              className="nav-link"
              style={spring}
            >
              <SearchForm
                {...{
                  keyword,
                  handleChange,
                  handleSubmit
                }}
              />
            </animated.li>
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
      <ScrollToTop />
    </>
  );
}

export default Home;