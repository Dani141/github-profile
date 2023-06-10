import React from 'react'
import styled from "styled-components";

interface StastsAreaProps {
  repos: string;
  followers: string;
}

export const StartArea = ({ repos, followers }: StastsAreaProps) => {
  return (
    <Container>
      <Data>
        <span> Followers&nbsp;</span>
        <strong>{followers}</strong>
      </Data>

      <Data>
        <span>&nbsp;Repos </span>
        <strong>{repos}</strong>
      </Data>

    </Container>
  );
};

const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1.8rem 3.2rem;
  }
`;

const Data = styled.li`
  display: flex;
  justify-content:flex-start ;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  span {
    font-size: 1.3rem;
    line-height: 1.6rem;
    text-align: center;
    color: ${(props) => props.theme.colors.textNorm};

    @media (min-width: 768px) {
      font-size: 1.5rem;
      justify-content:space-between ;
    }
  }

  strong {
    font-weight: bold;
    font-size: 1.8em;
    line-height: 2.4rem;
    margin-top: 0.8rem;
 
    color: ${(props) => props.theme.colors.textBolded};

    @media (min-width: 768px) {
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }
`;

