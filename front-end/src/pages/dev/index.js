import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/';
import Dev from '../../assets/dev.jpg';
import { Profile, Button } from './styles';

export default function dev() {
  return (
    <Container>
      <h1>Desenvolvedora</h1>
      <Profile>
        <img src={Dev} alt="Karol" />
        <p>
          Sou formada em Gestão de TI e Pós-Graduada em Gestão e Segurança de
          Redes de Computadores. Sempre tive afinidade com a tecnologia, nesta
          etapa da vida estou estudando a fundo desenvolvimento web através do
          JavaScript.
        </p>
        <Link>
          <Button>
            <a href="https://www.linkedin.com/in/karollyne-costa-2a185aa7/">
              Linkedin
            </a>
          </Button>
        </Link>
      </Profile>
    </Container>
  );
}
