
import Directory from './components/directory/directory.component';

import Categories from './resources/categories.data';


const App = () => {

  const categories = Categories;
  

 return(
  <Directory categories={categories}/>
 );



}

export default App;
