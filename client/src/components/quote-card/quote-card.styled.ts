import styled from 'styled-components';
import { theme } from './../../styles';

export const TickerCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 14px;
  padding: 22px;
  cursor: pointer;
  box-shadow: ${theme.shadows.card};
  transition: ${theme.transition.main};

  &:hover {
    transform: scale(0.99);
    background: ${theme.gradient.linearGradient};
  }
`;

export const TickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Ticker = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.mainPink};
  text-transform: uppercase;
`;

export const Exchange = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xm};
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
`;

export const TickerBody = styled.div`
  background-color: ${theme.colors.mainGray};
  border-radius: 14px;
  padding: 4px 12px;
  border: ${theme.borders.medium} ${theme.colors.borderGray};
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
  margin-bottom: 12px;
  font-weight: ${theme.fontWeights.medium};
`;

export const Change = styled.p``;

export const ChangePercent = styled.p<{ $isProfitable: boolean }>`
  color: ${({ $isProfitable }) =>
    $isProfitable ? theme.colors.successGreenText : theme.colors.lossRedText};
  width: min-content;
  min-width: 50px;
  padding: 0 8px;
  background-color: ${({ $isProfitable }) =>
    $isProfitable ? theme.colors.successGreenBg : theme.colors.lossRedBg};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const PriceInfo = styled.div``;

export const Price = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.heading};
`;
