'use client';

import type { ComponentProps } from 'react';
import { Button } from '@/components/ui/kibo-ui/ai/button';
import { ScrollArea, ScrollBar } from '@/components/ui/kibo-ui/ai/scroll-area';
import { cn } from '@/lib/utils';

export type AISuggestionsProps = ComponentProps<typeof ScrollArea>;

export const AISuggestions = ({
  className,
  children,
  ...props
}: AISuggestionsProps) => (
  <ScrollArea className="w-full overflow-x-auto whitespace-nowrap" {...props}>
    <div className={cn('flex w-max flex-nowrap items-center gap-2', className)}>
      {children}
    </div>
    <ScrollBar className="hidden" orientation="horizontal" />
  </ScrollArea>
);

export type AISuggestionProps = Omit<
  ComponentProps<typeof Button>,
  'onClick'
> & {
  suggestion: string;
  onClick?: (suggestion: string) => void;
};

export const AISuggestion = ({
  suggestion,
  onClick,
  className,
  variant = 'outline',
  size = 'sm',
  children,
  ...props
}: AISuggestionProps) => {
  const handleClick = () => {
    onClick?.(suggestion);
  };

  return (
    <Button
      className={cn('cursor-pointer rounded-full px-4', className)}
      onClick={handleClick}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {children || suggestion}
    </Button>
  );
};
