import Categories from '../../resources/categories.data';
import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = Categories;

  return (
      <>
      <Directory categories={categories} />
      </>

  );
};

export default Home;
