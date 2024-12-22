import React from 'react';
import { Header } from '@shared/header/src';
import { Footer } from '@shared/footer/src';
// Uncomment this line to use CSS modules
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Header title="My custom title" />

      <h2>My custom app is being started!</h2>

      <Footer />
    </div>
  );
}

export default App;
