import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Link from '../../components/Link';
import styles from './Contact.module.scss';

export default function Contact() {
  const { data } = useStaticQuery(query);
  return (
    <Section>
      <Text type='heading' as='h2'>
        Let's Talk!
      </Text>
      <Text type='body' as='p'>
        Let's get in touch to talk about job opportunties and share experiences!
      </Text>
      <ul className={styles.items}>
        {data.content.map((item) => (
          <li className={styles.item} key={item.contentfulid}>
            <Text type='body' color='heading' as='h3'>
              {item.description.description}
            </Text>
            <Link className={styles.link} to={item.href} mask>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const query = graphql`
  {
    data: contentfulQuerable(slug: { eq: "contact-info-website" }) {
      content {
        ... on ContentfulLink {
          contentfulid
          description {
            description
          }
          label
          href
        }
      }
    }
  }
`;
