import React from 'react';
import { FaCss3, FaHammer, FaHouseUser, FaHtml5, FaInfo, FaNodeJs, FaReact,  FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'


// imports pages
import logo from '../Imgs/logo.png'
import Button from './forms/Button';
import Input from './forms/Input';
import Projetos from './Home/Projetos';
import './NaveBar.css'



const NaveBar = ({id}) => {
    return ( 
        <section className='main'>
            <div className='container'>
                <header>
                   <div className='logo'>
                    <img src={logo} alt="" />
                   </div>
                   <nav>
                       <ul>
                           <Link to="/"><li><a href="#"><FaHouseUser className='inc'/> Home</a></li></Link>
                           <li><a href="#sobre"><FaUserCircle className='inc'/> Sobre</a></li>
                        <Link to="/projetos"><li><a href="#"><FaHammer className='inc'/> Projetos</a></li></Link>
                           
                           <li><a href="#"> <FaInfo className='inc'/>News</a></li>
                       </ul>
                   </nav>
                  
                </header>

                <div className='hero_main'>
                    <div className='left'>
                        <div>
                        <h1>Julio Nunes</h1>
                        <p>Cadastre seu e-mail para participar e tenha acesso aos mais diversos conteúdos de programação com foco no iniciante.</p>
                        </div>
                        <div className='form' >
                            <Input  placeholder="Digite seu E-mail..." value=''  />
                            <Button text="Cadastrar"/>
                        </div>
                        <div className='Icons'>
                            <ul>
                            <li><FaHtml5/></li>
                            <li><FaCss3/></li>
                            <li><FaNodeJs/></li>
                            <li><FaReact/></li>
                            </ul>
                        </div>
                    </div>
                    <div className='right'>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default NaveBar;