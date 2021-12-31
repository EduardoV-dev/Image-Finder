import { Header, Navbar } from '@components/layout';
import { SearchForm } from '@components/commons';
import { useForm } from '@hooks';

const style = {
  main: {
    width: '95%',
    maxWidth: '81.5rem',
  }
}

const ImgView = () => {
  const { keyword, handleChange, handleSubmit } = useForm();

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
        className="mt-5 mx-auto"
        style={style.main}
      >
        <h1>ImgView page</h1>
      </main>
    </>
  );
}

export default ImgView;