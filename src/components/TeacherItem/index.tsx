import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/43795015?s=460&u=f65dbdb94d9d38af0e0dff607c7cfc22d29781c8&v=4" alt="Eduardo Nakatsuka"/>
        <div>
          <strong>Eduardo Nakatsuka</strong>
          <span>Otaku</span>
        </div>
      </header>

      <p>
        Pessoa Otaku que gosta de dormir o dia inteiro
        <br/><br/>

        Gosta de andar de moto ocasionalmente, curte tomar uma e é um meme ambulante.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
