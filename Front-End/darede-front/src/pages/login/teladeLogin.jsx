import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logoo from '../../img/imgLogin/darede.png'
import axios from 'axios';

import React, { Component } from 'react';

export default class teladeLogin extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      erroMensagem: '',
      isLoading: false,
      redirectTo: null,
    };
  }


  efetuaLogin = (event) => {
    event.preventDefault();
    console.log('logando')
    this.setState({ erroMensagem: '', isLoading: true });

    axios.post('http://localhost:5000/api/Login', {
      email: this.state.email,
      senha: this.state.senha,
    })

      .then((resposta) => {
        if (resposta.status === 200) {

          localStorage.setItem('usuario-login', resposta.data.token);
          this.setState({ isLoading: false });
          this.setState({ redirectTo: "/Listagem" });
        }
      })

      .catch(() => {
        this.setState({
          erroMensagem: 'E-mail ou senha inválidos, corrija NOVAMENTE',
          isLoading: false,
        });
      });

  }

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value });
  };




  render() {
    return (
      <div className='centro'>
        <div className='lado1'>
          <h1>LOGIN</h1>
          <img className='fundob1' src={fundoB1} alt="" />
        </div>
        <div >
          <div className='digitacao'>
            <div className='bloco1'></div>
            <div className='bloco2'></div>
            <div className='bloco3'>

              <div>
                <img class="logoo" src={Logoo} alt="" />
              </div>

              <div className='estilizacaoI'>

                <p>EMAIL</p>
                <input value={this.state.email} onChange={this.atualizaStateCampo}  type="text" name="email" />

                <p>SENHA</p>
                <input input value={this.state.senha} onChange={this.atualizaStateCampo} class="inputS" type="password"  name="senha" />
              </div>
              <div>
                  {/* {
                    this.state.isLoading === true && <button  id="botao"> Loading </button>
                  }

                  {
                    this.state.isLoading === false && <button id="botao" type="submit"
                      disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} >
                      Logar
                    </button>
                  } */}

                  <button id="botao">
                    <a className='letraBtn' href="/ListagemEquipamentos">Logar</a>
                  </button>
                </div>

            </div>
          </div>

        </div>
      </div>
    )
  }

}

