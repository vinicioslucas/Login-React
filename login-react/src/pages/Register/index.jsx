import { useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { Link } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from "../../assets/logo.svg";
import seta from "../../assets/seta.svg"

import "./styles.css";

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] = 
      useCreateUserWithEmailAndPassword(auth);

      function HandleSignOut(e){
          e.preventDefault();
          createUserWithEmailAndPassword(email, password);
      }

      if(loading){
          return <p>Carregando...</p>
      }
      if (user) {
        return console.log(user);
      }

  return ( 
    <div className="container">
      <header className="header">
      <img src={logo} alt="Workflow" />
      <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
           type="text" 
           name="email" 
           id="email" 
           placeholder="Tontoin@gmail.com"
           onChange={e => setEmail(e.target.value)}
           />
        </div>
        
        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input 
            type="password"  
            name="password" 
            id="password" 
            placeholder="***************" 
            onChange={e => setPassword(e.target.value)}
            />
        </div>

        <button className="button" onClick={HandleSignOut}>
          Cadastrar <img src={seta} alt="arrow" />
        </button>

        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link href="#">Acesse a sua conta aqui</Link>
        </div>

      </form>
  </div>
  );
}