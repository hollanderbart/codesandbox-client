import React, { useState, useEffect } from 'react';
import { H2, P } from '../../../components/Typography';
import SandboxCount from '../../../components/SandboxCount';
import one from '../../../assets/images/explore/1.png';
import two from '../../../assets/images/explore/2.png';
import three from '../../../assets/images/explore/3.png';
import four from '../../../assets/images/explore/4.png';
import five from '../../../assets/images/explore/5.png';
import six from '../../../assets/images/explore/6.png';
import seven from '../../../assets/images/explore/7.png';
import eight from '../../../assets/images/explore/8.png';
import nine from '../../../assets/images/explore/9.png';
import ten from '../../../assets/images/explore/10.png';
import eleven from '../../../assets/images/explore/11.png';
import twelve from '../../../assets/images/explore/12.png';

import {
  ImageWrapper,
  Button,
  Wrapper,
  Image,
  Iframe,
  itemWidth,
  viewPortMargin,
  smallItemHeight,
  Container,
} from './elements';
import { WRAPPER_STYLING } from '../../../components/layout';

const Sandbox = ({
  id,
  image,
  big,
  index = 0,
  x,
  y = 0,
  shouldAnimate,
  randomizeHeight = true,
  wrapperWidth,
}) => {
  const [clicked] = useState(null);
  const topOffset = React.useRef(
    y + (randomizeHeight ? Math.random() * 120 : 0)
  );

  const element = React.useRef();

  useEffect(() => {
    let lastRender = Date.now();
    let isRendering = true;

    const render = () => {
      const elapsedTime = Date.now() - lastRender;
      const baseSpeed = shouldAnimate ? 5 : 0.5;
      const deltaX = (baseSpeed * elapsedTime) / 1000;

      if (element.current) {
        let currentLeft = parseInt(
          element.current.style.left.replace('px', ''),
          10
        );
        if (currentLeft <= 0) {
          currentLeft = wrapperWidth + itemWidth + viewPortMargin;
        }
        element.current.style.left = currentLeft - deltaX + 'px';
      }

      lastRender = Date.now();

      if (isRendering) {
        requestAnimationFrame(render);
      }
    };

    if (element) {
      render();
    }

    return () => {
      isRendering = false;
    };
  }, [element, shouldAnimate, wrapperWidth]);

  return (
    <Wrapper
      big={big}
      index={index}
      style={{
        left: itemWidth + x,
        top: topOffset.current,
      }}
      ref={element}
    >
      {clicked ? (
        <Iframe
          big={big}
          title={id}
          src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&view=preview&hidedevtools=1`}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      ) : (
        <Button href={`https://codesandbox.io/s/${id}`} target="_blank">
          <Image big={big} src={image} alt={id} />
        </Button>
      )}
    </Wrapper>
  );
};

const Experiment = () => {
  const [hasMouseOver, setMouseOver] = React.useState(false);

  const imageWrapperWidth = itemWidth * 11 + viewPortMargin - 270;
  return (
    <>
      <div style={{ marginTop: '2rem', ...WRAPPER_STYLING }}>
        <H2>Create Static Sites, Full-stack Web Apps, or Components</H2>
        <P
          big
          muted
          css={`
            margin-bottom: 2rem;
          `}
        >
          Explore some of the <SandboxCount />+ sandboxes crafted by our
          community of creators.
        </P>
      </div>
      <Container>
        <ImageWrapper
          width={imageWrapperWidth}
          onMouseEnter={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
        >
          <section>
            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={0}
              x={(itemWidth + 16) * 0}
              id="j0y0vpz59"
              big
              image={one}
              wrapperWidth={imageWrapperWidth}
            />
            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={1}
              x={(itemWidth + 16) * 1}
              id="m7q0r29nn9"
              big
              image={two}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={2}
              x={(itemWidth + 16) * 2}
              id="variants-uotor"
              image={three}
              randomizeHeight={false}
              wrapperWidth={imageWrapperWidth}
            />
            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={2}
              x={(itemWidth + 16) * 2}
              y={smallItemHeight + 16}
              id="ppxnl191zx"
              image={four}
              randomizeHeight={false}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={4}
              x={(itemWidth + 16) * 3}
              id="732j6q4620"
              image={five}
              wrapperWidth={imageWrapperWidth}
            />
            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={5}
              x={(itemWidth + 16) * 4}
              id="react-three-fiber-untitled-game-i2160"
              big
              image={six}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={6}
              x={(itemWidth + 16) * 5}
              id="ln0mi"
              big
              image={seven}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={7}
              x={(itemWidth + 16) * 6}
              id="yp21r"
              big
              image={eight}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={8}
              x={(itemWidth + 16) * 7}
              id="2wvzx"
              big
              image={nine}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={9}
              x={(itemWidth + 16) * 8}
              id="prb9t"
              big
              image={ten}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={10}
              x={(itemWidth + 16) * 9}
              id="g1u8u"
              big
              image={eleven}
              wrapperWidth={imageWrapperWidth}
            />

            <Sandbox
              onOpenIframe={() => {
                setMouseOver(true);
              }}
              shouldAnimate={!hasMouseOver}
              index={11}
              x={(itemWidth + 16) * 10}
              id="b0ntj"
              big
              image={twelve}
              wrapperWidth={imageWrapperWidth}
            />
          </section>
        </ImageWrapper>
      </Container>
    </>
  );
};
export default Experiment;
