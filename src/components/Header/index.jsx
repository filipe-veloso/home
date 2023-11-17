import React from 'react'

import ArrowIcon from '../../assets/arrow.svg'

import BackgroundLetterAvatars from '../AvatarName/AvatarName'

import './style.css'

const Header = () => {
    
    let page = window.location.pathname.split('/')[1];
    let title = '';
    let className = '';

    if (page === 'home' ) {
        title = 'Resumo das cobranças'
        className = 'header-home'
    }
    else if (page === 'clients') {
        title = 'Clientes'
        className = 'header-clients'
    } 
    //   ---- funcionalidade para o próximo sprint  
    // else if (page === 'cobrancas') {
    //     title = 'Cobranças'
    //     className = 'header-main-cobrancas'
    // }


    const userName = "Filipe Amaral";
        // é preciso usar o getItem from localStorage para pegar o userName e passar para BackgroundLetterAvatars


    return (
        <header className='header-main'>
            <article className={`header-container ${className} `}>
                <h2>{title}</h2>
                <section className="header-profile-icon">
                    
                        <BackgroundLetterAvatars userName={userName} />

                    <img src={ArrowIcon} />
                </section>
            </article>
        </header>

    )
}

export default Header