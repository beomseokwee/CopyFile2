import styled from 'styled-components';

export const HeroSection = styled.div`
  background-image: url(${({ mainImg }) => mainImg});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const HeroTextBox = styled.div`
  width: 970px;
  height: 450px;
  margin: 0 auto;
  padding: 7rem 0;
`;

export const MainTitle = styled.h1`
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 500;
  font-size: 60px;
`;

export const StarsBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)}
  margin-bottom: 1rem;
`;

export const Stars = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;

export const Star = styled.li`
  ${({ theme }) => theme.flex('center', 'center', null)}
  color: #fff;
`;

export const Rating = styled.span`
  margin-left: 0.5rem;
  color: #ffce21;
  font-weight: 500;
`;

export const TotalBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)}
`;

export const Total = styled.div`
  margin-right: 2rem;
  padding-right: 1rem;
  color: #fff;
  border-right: 1px solid #fff;
  text-align: center;
  &:last-child {
    border: none;
  }
  h5 {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 3px;
  }
  p {
    color: #fff;
  }
`;