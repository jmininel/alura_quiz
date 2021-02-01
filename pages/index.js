import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
       <Head>
        <title>Quiz Super Mario!!</title>
        <meta name="title" content="SUPER MARIO!!" />
        <meta name="description" content="Teste seus conhecimentos nerds!!" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quiz SUPER MARIO!" />
        <meta property="og:description" content="Teste seus conhecimentos nerds!!" />
        <meta property="og:image" content="https://i.pinimg.com/originals/55/14/0a/55140a98c3ee41b7de44f7f89cdb98c5.jpg" />
        <meta property="og:image:secure_url" content="https://i.pinimg.com/originals/55/14/0a/55140a98c3ee41b7de44f7f89cdb98c5.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="SUPER MARIO S2" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://i.pinimg.com/originals/55/14/0a/55140a98c3ee41b7de44f7f89cdb98c5.jpg" />
        <meta property="twitter:title" content="Quiz SUPER MARIO" />
        <meta property="twitter:description" content="Teste seus conhecimentos nerds!!" />
        <meta property="twitter:image" content="https://i.pinimg.com/originals/55/14/0a/55140a98c3ee41b7de44f7f89cdb98c5.jpg" />
      </Head>
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Super Mario</title>
      </Head>
     <QuizContainer>
       <QuizLogo />
       <Widget>
            <Widget.Header>
             <h1>The legendo of Zelda</h1>
            </Widget.Header>
                <Widget.Content>
                  <form onSubmit={function (infosDoEvento) {
                       infosDoEvento.preventDefault();
                       router.push(`/quiz?name=${name}`);
                  }}
                  >
                   <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
                 <Button type="submit" disabled={name.length === 0 }>
                   {`Jogar ${name}`}
                 </Button>
                 </form>
               </Widget.Content>
      </Widget>

      <Widget>
         <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>vmpiovnrpvgonirwgrjgprogreog</p>
          </Widget.Content>
      </Widget>
      <Footer />
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/jmininel" />
    </QuizBackground>
  </>
  );
}