import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
      I am enthusiastic about Front-end Developer and I work with React Ecosystem. I am still developing my skills like UI/UX Designer and Back-end Developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1WqNAUMOv16fIt2wOxfl7ehqTzWAACjoKWRYB4b5I_K8/edit'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;