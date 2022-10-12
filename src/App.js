import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './Components/Main/Main';
import { NavBar } from './Components/NavBar/NavBar'
import { Footer } from './Components/Footer/Footer'
import { Rings } from './Components/Main/Rings/Rings'
import Ring from './Components/Main/Rings/RingsUnique/Ring';
import { Necklace } from './Components/Main/Necklace/Necklace';
import Necklaces from './Components/Main/Necklace/NecklaceUnique/Necklaces'
import { Bracelets } from './Components/Main/Bracelets/Bracelets';
import Bracelet from './Components/Main/Bracelets/BraceletsUnique/Bracelet';
import { Watche } from './Components/Main/Watches/Watche';
import Watches from './Components/Main/Watches/WatcheUnique/Watchs';
import { Desinger } from './Components/Main/Desinger/Desinger';
import Designers from './Components/Main/Desinger/DesingerUnique/Desingers';
import { Wedding } from './Components/Main/Wedding/Wedding';
import Weddings from './Components/Main/Wedding/WeddingUnique/Weddings';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/Ring/:id" element={<Ring />} />
        <Route path='/Necklaces' element={<Necklace />} />
        <Route path='/Necklaces/:id' element={<Necklaces />} />
        <Route path='/Bracelets' element={<Bracelets />} />
        <Route path='/Bracelet/:id' element={<Bracelet />} />
        <Route path='/Watches' element={<Watche />} />
        <Route path='/Watches/:id' element={<Watches />} />
        <Route path='/DESIGNER' element={<Desinger />} />
        <Route path='/DESIGNER/:id' element={<Designers />} />
        <Route path='/WEDDING' element={<Wedding />} />
        <Route path='/WEDDING/:id' element={<Weddings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
