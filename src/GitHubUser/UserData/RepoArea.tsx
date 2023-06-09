import React from 'react'
import styled from "styled-components";
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.tsx';

interface RepoAreaPropos {
    repos: {
        nameRepo: string;
        descriptionRepo: string;
    };
  }
  export default function  RepoArea ({ repos }: RepoAreaPropos) {
    const { lightMode } = useContext(ThemeContext);
    return (
        <Container>

        </Container>
    )
}
const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

