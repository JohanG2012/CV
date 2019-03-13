import React from 'react';
import PageContainer from './components/PageContainer';
import Header from './components/Header';
import Section from './components/Section';
import Skills from './components/Skills';
import ExpertiseList from './components/ExpertiseList';
import StoriesList from './components/StoriesList';
import content from './configs/content';
import LinkedIn from './components/LinkedIn';
import Link from './commons/Link';

const App = () => (
  <PageContainer>
    <Header
      firstName={content.firstName}
      lastName={content.lastName}
      title={content.title}
      email={content.email}
      github={content.github}
      linkedin={content.linkedin}
    />
    {content.sections.summary && <Section title="Summary">{content.summary}</Section>}
    {content.sections.background && (
      <Section title="Background" rightPadding="30px">
        {content.background}
      </Section>
    )}
    {content.sections.expertise && (
      <Section title="Areas of Expertise">
        <ExpertiseList items={content.expertise} />
      </Section>
    )}
    {content.sections.skills && (
      <Section title="Technical Skills">
        <Skills skills={content.skills} />
      </Section>
    )}
    {content.sections.experience && (
      <Section title="Work Experience">
        <StoriesList
          width="515px"
          experience={
            content.experience.length > 6 ? content.experience.slice(0, 6) : content.experience
          }
        />
      </Section>
    )}
    {content.experience.length > 6 && (
      <Section noBar>
        <LinkedIn />
      </Section>
    )}
    {content.sections.education && (
      <Section title="Education">
        <StoriesList experience={content.education} />
      </Section>
    )}
    <Section>
      <p>
        This resume was <i className="fas fa-code" /> with <i className="fab fa-react" /> and{' '}
        <i className="fas fa-heart" />. Fork me at <i className="fab fa-github" />{' '}
        <Link href={content.repository}>{content.repository}</Link>
      </p>
    </Section>
  </PageContainer>
);

export default App;
