import React from "react";
import '../../css/cadastroFuncionario.css'
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import IconeUsuario from '../../img/imgCliente/iconeUsuario.png'
import imgAdm from '../../img/imgADM/img_adm.png'
import sair from '../../img/imgCliente/sair.png'
import localizacao from '../../img/imgCliente/localizacao.png'
import telefone from '../../img/imgCliente/telefone.png'
import insta from '../../img/imgCliente/instagram.png'
import linkedin from '../../img/imgCliente/linkedin.png'
import whats from '../../img/imgCliente/whats.png'



function CadastroFuncionario() {

    // const[isModalVisibleVPC, setIsModalVisibleVPC] = useState(false);
    // const[isModalVisibleEC2, setIsModalVisibleEC2] = useState(false);

    return (

        <div>

            <header>
                <div className='corFundoH'>

                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="/MeusEquipamentos">Meus Equipamentos</a>
                        <a href="">Contato</a>
                        <section className='imgHeader'>
                            <img className='iconeUC' src={imgAdm} alt="" />
                        </section>
                        <a href="/" target="principal" ><img className='sair' src={sair} alt="" />
                            
                        </a>
                    </div>




                </div>


            </header>
            <div className='divisaoPrinc2'>

                <div className='divisaoFundo'>


                    <div className='blocoInfo'>

                        <div>
                            <section className='posicaoI' >
                                <img className='circuloFoto' src={imgAdm} alt="" />
                            </section>

                            <section className='selecaoLinhas'>


                                <div className='linha'></div>

                                <div >

                                    <div className='dividirLinha'>
                                        <img className='iconeU' src={IconeUsuario} alt="" />
                                        <h1>Dados Usuario</h1>
                                    </div>



                                    <div className='dividirLinha'>
                                        <h3>Empresa:</h3> <p>DAREDE</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>email:</h3> <p>adm@darede.com</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>CNPJ:</h3> <p>131.213.421-89</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>CEL:</h3> <p>11 92134-1223</p>
                                    </div>


                                </div>
                            </section>

                        </div>

                    </div>

                    <div className='Coluna_Linhas'>
                        <h1>Cadastro de Funcionários</h1>
                        <p>NOME:</p>
                        <div className='parte1'>
                            <input type="text" />
                           
                        </div>
                        <p>EMAIL:</p>
                        <input className='solitarioss' type="email" />
                        <div className='parte2'>
                            <div>
                                <p>CPF:</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>RG:</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>DATA DE NASCIMENTO:</p>
                                <input type="text" />
                            </div>

                        </div>
                        <p>ENDEREÇO:</p>
                        <input className='solitarios' type="text" />
                        <div className='parte3'>
                            <div>
                                <p>ESTADO:</p>
                                <input className="Estado" type="text" />
                            </div>
                            <div>
                                <p>CIDADE:</p>
                                <input type="text" />
                            </div>

                        </div>
                        <div className='parte4'>
                            <div>
                                <p>NUMERO:</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>CRIAR SENHA:</p>
                                <input type="senha" />
                            </div>

                        </div>

                        <div className="botoess">
                            <button>Cadatrar</button>
                            <button>Cancelar</button>
                        </div>

                    </div>

                </div>

                <section className="blocoImg"></section>

            </div>

            <footer className='corFundoF'>

                <div className='divisaoF'>


                    <div className="LADO">
                             © 2022 DAREDE CONSULTORIA 
                    </div>


                    {/* <div >
                        <img className='logoF' src={Logo} alt="" />
                        <p className='baixoL'>Nosso objetivo é oferecer inovação sustentada,

                            aliando resultados e valores.</p>
                    </div>


                    <div className='localizacao' >
                        <img src={localizacao} alt="" />

                        <p>Alameda Araguaia, 2044 - Bloco 1 - CJ 210/211
                            06455-000 - Alphaville, Barueri
                            São Paulo - Brasil
                        </p>

                    </div>

                    <div className='divisaoFD'>
                        <img src={telefone} alt="" />
                        <p>+55 11 3900-1010 | 3995-6919</p>
                    </div>

                    <div className='divisaoFDN'>
                        <h3>Redes Sociais</h3>
                        <div>
                            <img src={whats} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div> */}
                </div>
            </footer>

        </div>
    );


}

export default CadastroFuncionario