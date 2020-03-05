import styled from 'styled-components';
import css from '@styled-system/css';

export interface IElementProps {
  margin?: number;
  marginX?: number;
  marginY?: number;
  marginBottom?: number;
  marginTop?: number; // prefer margin bottom to top
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  css?: Object;
}

export const Element = styled.div<IElementProps>(props =>
  css({
    boxSizing: 'border-box',
    margin: props.margin,
    marginX: props.marginX,
    marginY: props.marginY,
    marginBottom: props.marginBottom,
    marginTop: props.marginTop,
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
    padding: props.padding,
    paddingX: props.paddingX,
    paddingY: props.paddingY,
    paddingBottom: props.paddingBottom,
    paddingTop: props.paddingTop,
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
    ...(props.css || {}),
  })
);
