import React, { type ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => {
  return <button>{children}</button>;
};
