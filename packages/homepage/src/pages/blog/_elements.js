import styled from 'styled-components';

export const Header = styled.section`
  text-align: center;
  padding: 8rem;
  color: rgb(242, 242, 242);
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 5.5rem;
  letter-spacing: -0.02rem;
`;

export const PageSubtitle = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0 2rem;
  margin: 0 0 1.0875rem;
}
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;

  > div {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }

  > div :hover {
    transform: scale(0.98);
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    > div:nth-child(-n + 1) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export const Wrapper = styled.div`
  border: 1px solid #242424;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 0.5rem;
  clip-path: inset(0px round 0.5rem);
  background: #151515;
`;

export const CardContent = styled.div`
  padding: 2.5rem 2rem 3rem 2rem;
`;

export const Thumbnail = styled.img`
  border: none;
  border-bottom: 1px solid #242424;
  min-width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const Posts = styled.article``;

export const Title = styled.h2`
  color: #fff;
  margin: 0 0 0.5rem 0;
  font-size: 23px;
  line-height: 1.5;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  line-height: 1.6rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
`;

export const PublishDate = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1;
  font-weight: 300;
`;
