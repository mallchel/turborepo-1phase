import React from 'react';
import { Button } from '@shared/ui/src/components/Button';

export function Header({ title }: { title?: string }) {
  return (
    <header>
      {title}
      {title && <br />}
      Turborepo is the original monorepo tool (new header)!
      <input />
      <br />
      <Button>Click me</Button>
    </header>
  );
}
