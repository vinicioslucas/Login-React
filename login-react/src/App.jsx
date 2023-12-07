import logo from "./assets/logo.svg";

import './global.css';

export function App() {
  return <div className="container">
    <header className="header">
      <img src={logo} alt="Workflow" />
      <span>Por favor digite suas informações de login</span>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
           type="text" 
           name="email" 
           id="email" 
           placeholder="Tontoin@gmail.com"
           />
        </div>
        

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input 
            type="password"  
            name="password" 
            id="password" 
            placeholder="***************" />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <button className="button">
          Entrar <img src="" alt="" />
        </button>

        <div className="footer">
          <p>Você não tem uma conta?</p>
          <a href="#">Crie a sua conta aqui</a>
        </div>

      </form>

    </header>
  </div>
}