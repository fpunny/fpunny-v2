import React from 'react';
import classNames from 'classnames';
import Container from '../Container';
import styles from './Section.module.scss';

export default function Section({ className, contentClassName, ...props }) {
  return (
    <Container
      contentClassName={classNames(styles.content, contentClassName)}
      className={classNames(styles.container, className)}
      as='section'
      {...props}
    />
  );
}

Section.propTypes = Container.propTypes;
