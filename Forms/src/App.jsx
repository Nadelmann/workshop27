import { useState } from 'react';
import Authenticate from './components/Authenitcate.jsx'
import SignUpForm from './components/SignUpForm.jsx';
import "./App.css";


export default function App() {

  const [ token, setToken ] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
