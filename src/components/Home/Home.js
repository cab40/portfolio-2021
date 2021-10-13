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
              {/* <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/cab40"
              /> */}
               <a target = "_blank" href="//github.com/cab40">
                <img alt="github" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhmYjU5MiI+PHBhdGggZD0iTTc4LjExNjY3LDE1LjA1Yy0zMi45NjY2NywzLjU4MzMzIC01OS40ODMzMywzMC4xIC02My4wNjY2Nyw2Mi4zNWMtMy41ODMzMywzMy42ODMzMyAxNS43NjY2Nyw2My43ODMzMyA0NS4xNSw3NS4yNWMyLjE1LDAuNzE2NjcgNC4zLC0wLjcxNjY3IDQuMywtMy41ODMzM3YtMTEuNDY2NjdjMCwwIC0yLjg2NjY3LDAuNzE2NjcgLTYuNDUsMC43MTY2N2MtMTAuMDMzMzMsMCAtMTQuMzMzMzMsLTguNiAtMTUuMDUsLTEzLjYxNjY3Yy0wLjcxNjY3LC0yLjg2NjY3IC0yLjE1LC01LjAxNjY3IC00LjMsLTcuMTY2NjdjLTIuMTUsLTAuNzE2NjcgLTIuODY2NjcsLTAuNzE2NjcgLTIuODY2NjcsLTEuNDMzMzNjMCwtMS40MzMzMyAyLjE1LC0xLjQzMzMzIDIuODY2NjcsLTEuNDMzMzNjNC4zLDAgNy44ODMzMyw1LjAxNjY3IDkuMzE2NjcsNy4xNjY2N2MzLjU4MzMzLDUuNzMzMzMgNy44ODMzMyw3LjE2NjY3IDEwLjAzMzMzLDcuMTY2NjdjMi44NjY2NywwIDUuMDE2NjcsLTAuNzE2NjcgNi40NSwtMS40MzMzM2MwLjcxNjY3LC01LjAxNjY3IDIuODY2NjcsLTEwLjAzMzMzIDcuMTY2NjcsLTEyLjljLTE2LjQ4MzMzLC0zLjU4MzMzIC0yOC42NjY2NywtMTIuOSAtMjguNjY2NjcsLTI4LjY2NjY3YzAsLTcuODgzMzMgMy41ODMzMywtMTUuNzY2NjcgOC42LC0yMS41Yy0wLjcxNjY3LC0xLjQzMzMzIC0xLjQzMzMzLC01LjAxNjY3IC0xLjQzMzMzLC0xMC4wMzMzM2MwLC0yLjg2NjY3IDAsLTcuMTY2NjcgMi4xNSwtMTEuNDY2NjdjMCwwIDEwLjAzMzMzLDAgMjAuMDY2NjcsOS4zMTY2N2MzLjU4MzMzLC0xLjQzMzMzIDguNiwtMi4xNSAxMy42MTY2NywtMi4xNWM1LjAxNjY3LDAgMTAuMDMzMzMsMC43MTY2NyAxNC4zMzMzMywyLjE1YzkuMzE2NjcsLTkuMzE2NjcgMjAuMDY2NjcsLTkuMzE2NjcgMjAuMDY2NjcsLTkuMzE2NjdjMS40MzMzMyw0LjMgMS40MzMzMyw4LjYgMS40MzMzMywxMS40NjY2N2MwLDUuNzMzMzMgLTAuNzE2NjcsOC42IC0xLjQzMzMzLDEwLjAzMzMzYzUuMDE2NjcsNS43MzMzMyA4LjYsMTIuOSA4LjYsMjEuNWMwLDE1Ljc2NjY3IC0xMi4xODMzMywyNS4wODMzMyAtMjguNjY2NjcsMjguNjY2NjdjNC4zLDMuNTgzMzMgNy4xNjY2NywxMC4wMzMzMyA3LjE2NjY3LDE2LjQ4MzMzdjE4LjYzMzMzYzAsMi4xNSAyLjE1LDQuMyA1LjAxNjY3LDMuNTgzMzNjMjYuNTE2NjcsLTEwLjc1IDQ1LjE1LC0zNi41NSA0NS4xNSwtNjYuNjVjMCwtNDMgLTM2LjU1LC03Ni42ODMzMyAtNzkuNTUsLTcxLjY2NjY3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                style={{width:'1.8rem', height:'1.8rem'}}
                />
              </a>
              <a target = "_blank" href="//devpost.com/cab40">
                <img alt="devpost" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhmYjU5MiI+PHBhdGggZD0iTTQ3Ljk0NSwyNC4wOGwtMzQuNjk1NjIsNjEuOTMzNDRsMzUuNTk1OTQsNjEuOTA2NTZoNzUuMjA5NjlsMzQuNjgyMTksLTYxLjkybC0zNC42ODIxOSwtNjEuOTJ6TTYxLjkyLDUxLjZoMjQuNjE3NWMxOC43MTg0NCwwIDMzLjg2MjUsMTUuMzg1OTQgMzMuODYyNSwzNC40YzAsMTkuMDE0MDYgLTE1LjE0NDA2LDM0LjQgLTMzLjg2MjUsMzQuNGgtMjQuNjE3NXpNNzUuNjgsNjUuMzZ2NDEuMjhoMTAuMzJjMTEuMzgxNTYsMCAyMC42NCwtOS4yNTg0NCAyMC42NCwtMjAuNjRjMCwtMTEuMzgxNTYgLTkuMjU4NDQsLTIwLjY0IC0yMC42NCwtMjAuNjR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                  style={{width:'1.8rem', height:'1.8rem'}}
                />
              </a>
              {/* <IconLink
                label="devpost"
                icon="code"
                href="//devpost.com/cab40"
              /> */}
              <a target = "_blank" href="https://www.linkedin.com/in/catherine-burns-540b51194/">
                <img alt="linkedin"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhmYjU5MiI+PHBhdGggZD0iTTE0MS4wNCwxMy43NmgtMTEwLjA4Yy05LjQ5NDQsMCAtMTcuMiw3LjcwNTYgLTE3LjIsMTcuMnYxMTAuMDhjMCw5LjQ5NDQgNy43MDU2LDE3LjIgMTcuMiwxNy4yaDExMC4wOGM5LjQ5NDQsMCAxNy4yLC03LjcwNTYgMTcuMiwtMTcuMnYtMTEwLjA4YzAsLTkuNDk0NCAtNy43MDU2LC0xNy4yIC0xNy4yLC0xNy4yek01OC40OCw2OC44djY1LjM2aC0yMC42NHYtNjUuMzZ6TTM3Ljg0LDQ5Ljc3NjhjMCwtNC44MTYgNC4xMjgsLTguNDk2OCAxMC4zMiwtOC40OTY4YzYuMTkyLDAgMTAuMDc5MiwzLjY4MDggMTAuMzIsOC40OTY4YzAsNC44MTYgLTMuODUyOCw4LjcwMzIgLTEwLjMyLDguNzAzMmMtNi4xOTIsMCAtMTAuMzIsLTMuODg3MiAtMTAuMzIsLTguNzAzMnpNMTM0LjE2LDEzNC4xNmgtMjAuNjRjMCwwIDAsLTMxLjg1NDQgMCwtMzQuNGMwLC02Ljg4IC0zLjQ0LC0xMy43NiAtMTIuMDQsLTEzLjg5NzZoLTAuMjc1MmMtOC4zMjQ4LDAgLTExLjc2NDgsNy4wODY0IC0xMS43NjQ4LDEzLjg5NzZjMCwzLjEzMDQgMCwzNC40IDAsMzQuNGgtMjAuNjR2LTY1LjM2aDIwLjY0djguODA2NGMwLDAgNi42MzkyLC04LjgwNjQgMTkuOTg2NCwtOC44MDY0YzEzLjY1NjgsMCAyNC43MzM2LDkuMzkxMiAyNC43MzM2LDI4LjQxNDR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                style={{width:'1.5rem', height:'1.5rem'}}
                />
              </a>
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>
      <br/><br/>
      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Interests <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
