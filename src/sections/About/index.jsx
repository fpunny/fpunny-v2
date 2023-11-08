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
            <span role='img' aria-label='laptop'>
              💻
            </span>{' '}
            Software Developer
          </Text>
          <Text type='body'>
            I'm currently a full-stack software engineer at{' '}
            <Link to='https://meraki.cisco.com'>Cisco Meraki</Link>. Where I
            build performant and elegant web applications.
          </Text>
        </li>
        <li>
          <Text className={styles.heading} type='subheading' as='h3'>
            <span role='img' aria-label='graduation hat'>
              🎓
            </span>{' '}
            Hackathon Enthusiast
          </Text>
          <Text type='body'>
            Giving back to my community, I work with local hackathons by providing development work at{' '}
            <Link to='https://hackthevalley.io'>Hack the Valley</Link>, and{' '}
            <Link to='https://hackthe6ix.com'>Hack the 6ix</Link>
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
            to rock climbing gym is @ Basecamp.
          </Text>
        </li>
      </ul>
    </Section>
  );
}
