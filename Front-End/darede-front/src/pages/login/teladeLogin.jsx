import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logoo from '../../img/imgLogin/darede.png'
import axios from 'axios';

import React, {Component} from 'react';

export default class teladeLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: 'pedro@corinthians.com',
        senha: '1234',
        erroMensagem: '',
        isLoading: false,
    };
}

efetuaLogin = (event) => {
    event.preventDefault();
    console.log('logando')
    this.setState({ erroMensagem: '', isLoading: true });

    // axios.post('http://192.168.18.9:5000/api/Login', {
    //   email: this.state.email,
    //   senha: this.state.senha,
    // })

    axios.post('http://192.168.18.9:5000/api/Login', {
      email: this.state.email,
      senha: this.state.senha,
    })

      .then((resposta) => {
        if (resposta.status === 200) {

          localStorage.setItem('usuario-login', resposta.data.token);
          this.setState({ isLoading: false })

          let base64 = localStorage.getItem('usuario-login').split('.')[1];


          console.log(base64)

        //   if (parseJwt().role === '1') {

        //     this.props.history.push('/listarconsulta');
        //     console.log('logado: ' + usuarioAutenticado());
        //   } else if (parseJwt().role === '2') {
        //     this.props.history.push('/listarmedicos');
        //   } else {
        //     this.props.history.push('/listarminhas');
        //   }
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



  render(){
    return(
      <div className='centro'>
          <div className='lado1'>
            <h1>LOGIN</h1>
            <img className='fundob1'  src={fundoB1} alt="" />
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

                      <p>USUARIO</p>
                      <input type="text" />

                      <p>EMAIL</p>
                      <input type="email" />

                      <p>SENHA</p>
                      <input type="password" />
                    </div>

                    <div>
                      <button id='botao'>
                        <a className='temporario' href="ListagemEquipamentos">
                        Logar
                        </a>
                        
                        </button>
                    </div>

                 </div>
            </div>

          </div>
      </div>
    )
  }

}

