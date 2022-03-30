import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logo from '../../img/imgLogin/darede.png'

import React, {Component} from 'react';

export default class teladeLogin extends Component {

  

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
                   <img class="logo" src={Logo} alt="" />
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
                      <button id='botao'>Logar</button>
                    </div>

                 </div>
            </div>

          </div>
      </div>
    )
  }

}

