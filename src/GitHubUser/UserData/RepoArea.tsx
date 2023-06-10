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
export default function RepoArea({ nameRepo, descriptionRepo }: RepoAreaPropos) {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Container>
      <Data>
        <tbody>
          {nameRepo.map((name, index) => (
            <tr key={index}>
              <td id='name'>{name}</td>
              <td id='description'>{descriptionRepo[index]}</td>
            </tr>
          ))}
        </tbody>
      </Data>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  text-align: justify-all;
  display: flex;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;
  margin-top: 1.9rem;
  max-width: 50.0rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1.8rem 3.2rem;
  }
`;

const Data = styled.table`
  display: block;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 45rem;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
  td{
    border: 20px solid transparent;
  }
  #name{
    font-weight: bold;
  }

  tbody {
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: justify-all;
	  margin-left:50px;
    word-wrap: break-word;
    color: ${(props) => props.theme.colors.textNorm};

    @media (min-width: 768px) {
      font-size: 1.5rem;
      justify-content:space-between ;
    }
  }

`;

