import '../../css/funcionario.css'
import { Component, useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import sair from '../../img/imgCliente/sair.png'
import IconeUsuario from '../../img/imgCliente/iconeUsuario.png'
import localizacao from '../../img/imgCliente/localizacao.png'
import telefone from '../../img/imgCliente/telefone.png'
import insta from '../../img/imgCliente/instagram.png'
import linkedin from '../../img/imgCliente/linkedin.png'
import whats from '../../img/imgCliente/whats.png'
import boneco from '../../img/imgFuncionarios/boneco_cadastro.png'
import UserPool from '../../components/UserPool'
import AWSCognito from 'aws-sdk'


export default function cadastroClientes() {


    const Signup = () => {
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const [nome, setNome] = useState("");
        const [nascimento, setNascimento] = useState("");
        const [celular, setCelular] = useState("");
        const [endereco, setEndereco] = useState("");

        const onSubmit = (event) => {
            event.preventDefault();
            UserPool.signUp(
                email, senha,
                [
                    { Name: 'given_name', Value: 'testerrr' },
                    { Name: 'birthdate', Value: '10/10/2000' },
                    { Name: 'phone_number', Value: '+5511987654321' },
                    { Name: 'address', Value: 'Rua' }
                ],
                null, (err, data) => {
                    if (err) { console.log(err); }
                    console.log(data.user)
                });
        };

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input value={nome} onChange={(event) => setNome(event.target.value)}></input>
    
                    <label htmlFor="birthdate">Data de nascimento</label>
                    <input value={nascimento} onChange={(event) => setNascimento(event.target.value)}></input>
    
                    <label htmlFor="phone">Celular</label>
                    <input value={celular} onChange={(event) => setCelular(event.target.value)}></input>
    
                    <label htmlFor="address">Endereço</label>
                    <input value={endereco} onChange={(event) => setEndereco(event.target.value)}></input>
    
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
    
                    <label htmlFor="password">Senha</label>
                    <input value={senha} onChange={(event) => setSenha(event.target.value)}></input>
    
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>

        // return (


        //     <div>

        //         <header>
        //             <div className='corFundoH'>

        //                 <img className='logo' src={Logo} alt="" />
        //                 <div className='nave'>
        //                     <a href="">Meus Equipamentos</a>
        //                     <a href="">Contato</a>
        //                     <section className='imgHeader'>
        //                         <img className='iconeUC' src={Fake} alt="" />
        //                     </section>
        //                     <img className='sair' src={sair} alt="" />
        //                 </div>




        //             </div>


        //         </header>

        //         <div className='divisaoPrin'>
        //             <div className='divisaoFundo'>


        //                 <div className='blocoInfo'>

        //                     <div>
        //                         <section className='posicaoI' >
        //                             <img className='circuloFoto' src={Fake} alt="" />
        //                         </section>

        //                         <section className='selecaoLinhas'>


        //                             <div className='linha'></div>

        //                             <div >

        //                                 <div className='dividirLinha'>
        //                                     <img className='iconeU' src={IconeUsuario} alt="" />
        //                                     <h1>Dados Usuario</h1>
        //                                 </div>


        //                                 <div className='dividirLinha'>
        //                                     <h3 >Nome:</h3> <p>Pedro</p>
        //                                 </div>
        //                                 <div className='dividirLinha'>
        //                                     <h3>Empresa:</h3> <p>Corinthians</p>
        //                                 </div>
        //                                 <div className='dividirLinha'>
        //                                     <h3>Nome:</h3> <p>ti@corinthians.com</p>
        //                                 </div>
        //                                 <div className='dividirLinha'>
        //                                     <h3>CNPJ:</h3> <p>131.213.421-89</p>
        //                                 </div>
        //                                 <div className='dividirLinha'>
        //                                     <h3>CEL:</h3> <p>11 92134-1223</p>
        //                                 </div>
        //                                 <div className='dividirLinha'>
        //                                     <h3>TEL:</h3> <p>11 2752-2190</p>
        //                                 </div>

        //                             </div>
        //                         </section>

        //                     </div>




        //                 </div>

        //             </div>

        //             <div className='Coluna_Linhas'>
        //                 <h1>Cadatro de Clientes</h1>
        //                 <p>NOME:</p>
        //                 <div className='parte1'>
        //                     <input type="text" />

        //                 </div>
        //                 <p>EMAIL:</p>
        //                 <input className='solitarios' type="email" />
        //                 <div className='parte2'>
        //                     <div>
        //                         <p>CPF:</p>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <p>RG:</p>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <p>DATA DE NASCIMENTO:</p>
        //                         <input type="text" />
        //                     </div>

        //                 </div>
        //                 <p>ENDEREÇO:</p>
        //                 <input className='solitarios' type="text" />
        //                 <div className='parte3'>
        //                     <div>
        //                         <p>ESTADO:</p>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <p>CIDADE:</p>
        //                         <input type="text" />
        //                     </div>

        //                 </div>
        //                 <div className='parte4'>
        //                     <div>
        //                         <p>NUMERO:</p>
        //                         <input type="text" />
        //                     </div>
        //                     <div>
        //                         <p>CRIAR SENHA:</p>
        //                         <input type="senha" />
        //                     </div>

        //                 </div>

        //                 <div>
        //                     <button>Cadatrar</button>
        //                     <button>Cancelar</button>
        //                 </div>

        //             </div>

        //             <div>
        //                 <div className='Circulo_redodndo'></div>
        //             </div>

        //             <div>
        //                 <img src={boneco} alt="" />
        //             </div>



        //         </div>








        //         <footer className='corFundoF'>

        //             <div className='divisaoF'>
        //                 <div >
        //                     <img className='logoF' src={Logo} alt="" />
        //                     <p className='baixoL'>Nosso objetivo é oferecer inovação sustentada,

        //                         aliando resultados e valores.</p>
        //                 </div>


        //                 <div className='localizacao' >
        //                     <img src={localizacao} alt="" />

        //                     <p>Alameda Araguaia, 2044 - Bloco 1 - CJ 210/211
        //                         06455-000 - Alphaville, Barueri
        //                         São Paulo - Brasil
        //                     </p>

        //                 </div>

        //                 <div className='divisaoFD'>
        //                     <img src={telefone} alt="" />
        //                     <p>+55 11 3900-1010 | 3995-6919</p>
        //                 </div>

        //                 <div className='divisaoFDN'>
        //                     <h3>Redes Sociais</h3>
        //                     <div>
        //                         <img src={whats} alt="" />
        //                         <img src={linkedin} alt="" />
        //                         <img src={insta} alt="" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </footer>



        //     </div>
        // )

    }
}