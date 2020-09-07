import React from 'react';
import Container from '../Container';
import Text from '../Text';
import styles from './Footer.module.scss';
import Heart from '../../images/heart.svg';

export default function Footer() {
  return (
    <Container contentClassName={styles.container} as='footer'>
      <Text type='meta' bold>
        Made with <Heart className={styles.heart} /> by Frederic Pun
      </Text>
      <Text
        onClick={() => window.scroll({ top: 0, behavior: `smooth` })}
        className={styles.button}
        type='meta'
        as='button'
        bold
      >
        Back To Top
      </Text>
    </Container>
  );
}
