import React from 'react';
import deepmerge from 'deepmerge';
import styled, { keyframes } from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';
import { Element, IElementProps } from '../Element';

const variantStyles = {
  primary: {
    backgroundColor: 'button.background',
    color: 'button.foreground',
    ':hover:not(:disabled)': {
      // hoverBackground is polyfilled and uses a gradient
      // so we use background and not backgroundColor

      // background is not hooked to the system like backgroundColor
      // so we need to write the long syntax
      // TODO @sid: extend our system to make background work as well
      background: theme => theme.colors.button.hoverBackground,
    },
    ':focus:not(:disabled)': {
      // we use the same colors for hover and focus
      // but we add an active state to give
      background: theme => theme.colors.button.hoverBackground,
    },
  },
  secondary: {
    backgroundColor: 'secondaryButton.background',
    color: 'secondaryButton.foreground',
    // same technique as primary
    ':hover:not(:disabled)': {
      background: theme => theme.colors.secondaryButton.hoverBackground,
    },
    ':focus:not(:disabled)': {
      background: theme => theme.colors.secondaryButton.hoverBackground,
    },
  },
  link: {
    backgroundColor: 'transparent',
    color: 'mutedForeground',
    // same technique as primary
    ':hover:not(:disabled)': {
      color: 'foreground',
    },
    ':focus:not(:disabled)': {
      color: 'foreground',
    },
  },
  danger: {
    backgroundColor: 'dangerButton.background',
    color: 'dangerButton.foreground',
    // same technique as primary
    ':hover:not(:disabled)': {
      background: theme => theme.colors.dangerButton.hoverBackground,
    },
    ':focus:not(:disabled)': {
      background: theme => theme.colors.dangerButton.hoverBackground,
    },
  },
};

const commonStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 'none', // as a flex child
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
  paddingY: 0,
  paddingX: 2,
  height: '26px', // match with inputs
  width: '100%',
  fontSize: 2,
  fontWeight: 'medium',
  lineHeight: 1, // trust the height
  border: 'none',
  borderRadius: 'small',
  transition: 'all ease-in',
  transitionDuration: theme => theme.speeds[2],

  ':focus': {
    outline: 'none',
  },
  ':active:not(:disabled)': {
    transform: 'scale(0.98)',
  },
  ':disabled': {
    opacity: '0.4',
    cursor: 'not-allowed',
  },
  '&[data-loading]': {
    opacity: 1,
    cursor: 'default',
  },
};

const merge = (...objs) =>
  objs.reduce(function mergeAll(merged, currentValue = {}) {
    return deepmerge(merged, currentValue);
  }, {});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IElementProps {
  variant?: 'primary' | 'secondary' | 'link' | 'danger';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = 'primary', loading, css = {}, ...props }, ref) {
    const styles = merge(variantStyles[variant], commonStyles, css);

    return (
      <Element
        as="button"
        css={styles}
        ref={ref}
        disabled={props.disabled || loading}
        data-loading={loading}
        {...props}
      >
        {loading ? <AnimatingDots /> : props.children}
      </Element>
    );
  }
);

Button.defaultProps = {
  type: 'button',
};

/** Animation dots, we use the styled.span syntax
 *  because keyframes aren't supported in the object syntax
 */
const transition = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
});

const Dot = styled.span`
  font-size: 18px;
  animation: ${transition} 1.5s ease-out infinite;
`;

const AnimatingDots = () => (
  <>
    <VisuallyHidden>Loading</VisuallyHidden>
    <span role="presentation">
      <Dot>·</Dot>
      <Dot style={{ animationDelay: '200ms' }}>·</Dot>
      <Dot style={{ animationDelay: '400ms' }}>·</Dot>
    </span>
  </>
);
