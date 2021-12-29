import './App.css';
import Home from './resources/components/Home/Home.js';
import SidNav from './resources/components/SideNav/SidNav.js';

function App() {
  const html = document.getElementsByTagName('html')[0];
    html.style.height = '100%';
    html.style.display = 'flex';

    const body = document.getElementsByTagName('body')[0];
    body.style.height = "100%";
    body.style.width = "100%";
    body.style.position = 'relative';
    body.style.overflow = 'hidden';

    const root = document.getElementById('root');
    root.style.height = "100%";
    root.style.width = "100%";
  return (
    <div className="App">
      <SidNav></SidNav>
       {/* <Home/> */}
    </div>
  );
}

export default App;
