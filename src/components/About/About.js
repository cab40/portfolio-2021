import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="profilepic.jpg" />
        </div>
        
        <p>
        Lets {' '}
          <a className="about__link" href="https://github.com/cab40" style={{color:'#82a885', fontWeight:'bold'}}>
            GIT
          </a>{' '}
        to it!
        <br/> <br/> 
        Glad you could make it! I’m Catherine, a Systems Design Engineering Student at the University of Waterloo (graduating class of 2025).
        <br/><br/>
        Now you may be asking “what exactly is <a target='_blank' href='https://uwaterloo.ca/systems-design-engineering/'>Systems Design Engineering</a>?”, and I’m glad you asked since my class is wondering the same thing. 
        What I can tell you, though, is that I’m a designer and dev with interests in UI/UX, software, HMI, and vehicle automation.
        For the time being, I’m working as a Full Stack Software Engineer at Cisco, designing a Telemetry Dashboard for uWaterloo’s Midnight Sun Solar Car Team, 
        trying out plenty of new recipes, and refining my spotify playlists! 

        </p>
      </AboutInfo>
      <br/><br/><br/><br/><br/><br/>
      {/* <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p> </p>
        </Quote>
        <Quote>
          <p>
            Currently, my favourite type of cereal is Apple Cinnamon Cheerios
          </p>
        </Quote>
        <Quote>
          <p>
            
          </p>
        </Quote>
      </Flex> */}
    </AboutWrapper>
  );
};

export default About;
