import '../../css/empresa.css'
import React, { Component, useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import IconeUsuario from '../../img/imgCliente/iconeUsuario.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'


export default class listaEquipamento extends Component {



    render() {
        const [isModalVisible, setIsModalVisible] = useState(false);  
        return (
            <div>

                <header>
                    <div className='corFundoH'>
                        <img src={Logo} alt="" />
                    </div>


                </header>

                <div className='divisaoFundo'>


                    <div className='blocoInfo'>

                        <div>
                            <section className='posicaoI' >
                                <img className='circuloFoto' src={Fake} alt="" />
                            </section>

                            <section className='selecaoLinhas'>


                                <div className='linha'></div>

                                <div >

                                    <div className='dividirLinha'>
                                        <img className='iconeU' src={IconeUsuario} alt="" />
                                        <h1>Dados Usuario</h1>
                                    </div>


                                    <div className='dividirLinha'>
                                        <p >Nome:</p> <p>Pedro</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <p>Empresa:</p> <p>Corinthians</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <p>Nome:</p> <p>ti@corinthians.com</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <p>CNPJ:</p> <p>131.213.421-89</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <p>CEL:</p> <p>11 92134-1223</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <p>TEL:</p> <p>11 2752-2190</p>
                                    </div>

                                </div>
                            </section>

                        </div>




                    </div>

                    <div className='blocoCentralPrincipal'>

                        <div>



                            <div className='blocoCentral'>
                                <section >
                                    <img src={VPC} alt="" />

                                </section>

                                <section className='informacoes'>
                                    <h2>EC2</h2>
                                    <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                    <center>
                                        <button onClick={()=>setIsModalVisible(true)} className='botaoEC2'>

                                        </button>
                                        {isModalVisible ? <p className='letraBtn'>Mais Informções</p> : null}
                                    </center>
                                </section>

                            </div>

                            <div className='blocoCentral'>
                                <section >
                                    <img src={EC2} alt="" />
                                </section>

                                <section className='informacoes'>
                                    <h2>EC2</h2>
                                    <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                    <center>
                                        <button className='botaoEC2'>
                                            <a href="" className='letraBtn'>Mais Informções</a>
                                        </button>
                                    </center>
                                </section>

                            </div>

                        </div>

                    </div>


                </div>

                <footer className='corFundoF'>

                </footer>

            </div>
        )
    }

}

