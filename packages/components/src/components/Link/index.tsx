import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Text, ITextProps } from '../Text';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLSpanElement> &
  ITextProps & {
    as?: any;
    to?: string;
  };

const LinkElement = styled(Text).attrs({ as: 'a' })<LinkProps>(
  css({
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color ease',
    transitionDuration: theme => theme.speeds[2],
    ':hover, :focus': {
      color: 'foreground',
    },
  })
);

export const Link: React.FC<LinkProps> = props => (
  <LinkElement
    rel={props.target === '_blank' ? 'noopener noreferrer' : null}
    {...props}
  />
);
