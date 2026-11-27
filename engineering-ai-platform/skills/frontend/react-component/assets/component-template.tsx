import type { ReactNode } from 'react';

export interface ComponentTemplateProps {
  /** Visible label or content rendered inside the component. */
  children: ReactNode;
  /** Visual style variant aligned with design-system tokens. */
  variant?: 'primary' | 'secondary';
  /** Disables interaction when true. */
  disabled?: boolean;
}

export function ComponentTemplate({
  children,
  variant = 'primary',
  disabled = false,
}: ComponentTemplateProps) {
  return (
    <div data-variant={variant} aria-disabled={disabled || undefined}>
      {children}
    </div>
  );
}
