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
        I am a Systems Design Engineering Student at the University of Waterloo
        (graduating class of 2025). 
        <br/><br/>
        Now you may be thinking “what exactly is Systems Design Engineering?”. 
        Well, we employ a systems approach to design. Looking at a given system, an interacting combination of software, 
        people, machines, and tools as a whole, we create problem-based solutions using principles of engineering, 
        UI/UX design, and creativity.
        </p>
      </AboutInfo>
      <br/><br/><br/><br/><br/><br/>
      {/* <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex> */}
    </AboutWrapper>
  );
};

export default About;
