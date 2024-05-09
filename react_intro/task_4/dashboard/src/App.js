import logo from './logo.jpg';
import './App.css';
import { checkIsIndex, getFooterCopy, getFullYear } from './utils';


const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="title">School dashboard</h1>
  </div>
);

const Body = () => (
  <div className="App-body">
    <p>Login to access the full dashboard</p>
    <form>
      <label htmlFor='email' >Email</label>
      <input type='email' name='email' id='email' autoComplete='email'></input>
      <label htmlFor='password'>Password</label>
      <input type='email' name='email' id='password' autoComplete='true'></input>
    </form>
  </div>
);

const Footer = () => (
  <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
  </div>
);

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
