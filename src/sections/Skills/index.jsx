import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Link from '../../components/Link';
import styles from './Skills.module.scss';

export default function Skills() {
  const { data } = useStaticQuery(query);
  return (
    <Section>
      <Text type='heading' as='h2'>
        What I know...
      </Text>
      <ul className={styles.items}>
        {data.content.map((item) => (
          <li key={item.contentfulid}>
            <Text className={styles.heading} type='subheading' as='h3'>
              {item.label}
            </Text>
            <ul className={styles.skills}>
              {item.items.map((i) => (
                <Text className={styles.skill} type='meta' key={i} as='li' bold>
                  {i}
                </Text>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Text as='p' type='body' color='heading' className={styles.more}>
        Want to learn more? Check out{' '}
        <Link to='https://res.fpunny.xyz'>my resume</Link>.
      </Text>
    </Section>
  );
}

const query = graphql`
  {
    data: contentfulQuerable(slug: { eq: "skills" }) {
      content {
        ... on ContentfulList {
          contentfulid
          label
          items
        }
      }
    }
  }
`;
