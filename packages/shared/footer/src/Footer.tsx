import React from 'react';
import { Button } from '@shared/ui/src/components/Button';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      Footer
      <Button>Click me from footer</Button>
    </footer>
  );
}
