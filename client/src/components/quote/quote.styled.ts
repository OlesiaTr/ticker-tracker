import styled from 'styled-components';

export const QuoteList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  max-width: calc(100vw - 100px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
