import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="code" style={{color:'#8fb592'}} />
      </CardIcon>
      <CardTitle>Programming</CardTitle>
      <CardText>
        I always love a good programming challenge and participating in hackathons!
        <br/>
        Check out my Devpost
        <a href="https://devpost.com/cab40" style={{color:'#82a885', fontWeight:'bold'}}> HERE </a>
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="paint-brush" style={{color:'#8fb592'}} />
      </CardIcon>
      <CardTitle>Art</CardTitle>
      <CardText>
        My favourite mediums are watercolour, oil painting, and more recently, digital design.
        <br/>
        Check out my artwork
        <a href="https://catherineburns0.wixsite.com/mysite" style={{color:'#82a885', fontWeight:'bold'}}> HERE </a>
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fas', 'paper-plane']} style={{color:'#8fb592'}} />
      </CardIcon>
      <CardTitle>Travelling</CardTitle>
      <CardText>
        Exploring the world is a passion of mine! I look forward to hitting as many countries as possible :)
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>CATHERINE BURNS</h1>
          <p className="adjust">Systems Design Engineering Student</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#" style={{color:'black'}}>
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/cab40"
              />
              <IconLink
                label="devpost"
                icon="code"
                href="//devpost.com/cab40"
              />
              <IconLink
                label="codepen"
                icon={['fab', 'linkedin']}
                href="//codepen.io/anuraghazra"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>
      <br/><br/>
      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
