import React from 'react';

import './Home.css'
import lg from '../../Imgs/logo.png'

const Home = ({id}) => {
    return ( 
        <>
        <section className='Infos'> 
            <div className='infos_text'>DIVERSOS CONTEÚDOS</div>
            <div className='infos_circle'></div>
            <div className='infos_text'>VÁRIOS PROJETOS</div>
            <div className='infos_circle'></div>
            <div className='infos_text'>REDES SOCIAIS</div>
            <div className='infos_circle'></div>
            <div className='infos_text'>TIRE DÚVIDAS</div>
        </section>
        <section className='inst' id='sobre' >
        <div className='inst_infos'>
            <div className='inst_item'>
                <div className='inst_circle'></div>
                <div className='inst_text'>
                    <h2>Como funciona?</h2>
                    <p>De segunda a quinta, às 09:30 da manhã, o professor Bonieky faz uma aula de programação ao vivo e gratuita, focada em alunos iniciantes.</p>
                </div>
            </div>

            <div className='inst_item'>
                <div className='inst_circle'></div>
                <div className='inst_text'>
                    <h2>O que precisa para assistir??</h2>
                    <p>Só precisa ter uma conexão de internet e vontade de aprender, o resto deixa com o professor que ele te ensina.</p>
                </div>
            </div>

            <div className='inst_item'>
                <div className='inst_circle'></div>
                <div className='inst_text'>
                    <h2>E se eu não puder assistir às 9:30 da manhã?</h2>
                    <p>Todas as aulas ficam gravadas e você pode assistir em qualquer outro horário.</p>
                </div>
            </div>

            <div className='inst_item'>
                <div className='inst_circle'></div>
                <div className='inst_text'>
                    <h2>Qual o nível das aulas?</h2>
                    <p>Nas aulas o professor vai abordar assuntos de diferentes níveis, mas sempre com o maior foco no iniciante, explicando didaticamente os conceitos e exemplos. Sempre com assuntos e aprendizados novos pra você.</p>
                </div>
            </div>
        </div>
        </section>
        <footer >
            <div className='foot'>
            <img src={lg} alt="" />
            <p> Julio Nunes</p><span>&copy;</span>
            </div>
       
        </footer>
        </>
     );
}
 
export default Home;