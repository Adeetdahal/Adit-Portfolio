import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { GridLines, Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <BgAnimation />
      <GridLines aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </GridLines>
      <Section nopadding>
        <Hero />
        <Acomplishments />
      </Section>
      <Experience />
      <Projects />
      <Technologies />
      <Education />
    </Layout>
  );
};

export default Home;
