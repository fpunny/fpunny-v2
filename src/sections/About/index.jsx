import React from 'react';
import Section from '../../components/Section';
import Link from '../../components/Link';
import Text from '../../components/Text';
import styles from './About.module.scss';

export default function About() {
  return (
    <Section>
      <Text type='heading' as='h2'>
        What is a "
        <Text type='heading' color='primary'>
          Frederic Pun
        </Text>
        "?
      </Text>
      <ul className={styles.items}>
        <li>
          <Text className={styles.heading} type='subheading' as='h3'>
            <span role='img' aria-label='graduation hat'>
              🎓
            </span>{' '}
            University Student
          </Text>
          <Text type='body'>
            I'm currently studying computer science at the University of Toronto
            Scarborough. I help organize{' '}
            <Link to='https://hackthevalley.io'>Hack the Valley</Link>, and a
            teaching assistant for Software Design.
          </Text>
        </li>
        <li>
          <Text className={styles.heading} type='subheading' as='h3'>
            <span role='img' aria-label='laptop'>
              💻
            </span>{' '}
            Software Developer
          </Text>
          <Text type='body'>
            I'm currently a developer at{' '}
            <Link to='https://247studios.ca'>247studios</Link>. Some of my
            volunteer work include: mentoring at{' '}
            <Link to='https://ellehacks.com'>Ellehacks</Link>, and developing
            web apps for <Link to='https://hackthe6ix.com'>Hack the 6ix</Link>.
          </Text>
        </li>
        <li>
          <Text className={styles.heading} type='subheading' as='h3'>
            <span role='img' aria-label='rock climber'>
              🧗
            </span>
            Rock Climber
          </Text>
          <Text type='body'>
            When I'm not developing, one of my hobbies is rock climbing. My go
            to rock climbing gym is @ Pan Am Sports Centre.
          </Text>
        </li>
      </ul>
    </Section>
  );
}
