import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../ThemeProvider';
import Logo from '../../images/logo.svg';
import Moon from '../../images/moon.svg';
import Sun from '../../images/sun.svg';
import Container from '../Container';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const [dark, setDark] = useContext(ThemeContext);
  return (
    <Container contentClassName={styles.container} as='nav'>
      <div className={styles.logo}>
        <Logo className={styles.svg} />
      </div>
      <button
        aria-label='Toggle dark mode'
        onClick={() => setDark(!dark)}
        className={styles.button}
      >
        <Sun
          className={classNames(
            dark && styles[`icon--show`],
            styles[`icon--abs`],
            styles.icon,
          )}
        />
        <Moon
          className={classNames(dark || styles[`icon--show`], styles.icon)}
        />
      </button>
    </Container>
  );
}
