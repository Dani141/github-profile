import React, { useState }from 'react'
import styled from "styled-components";
import {StartArea} from './StartArea.tsx';
import {UpperArea} from './UpperArea.tsx';
import { UserDataProps } from '../../types/index.tsx';
import RepoArea from './RepoArea.tsx';


export const Index = ({ user }: UserDataProps) => {
  const [showRepo, setShowRepo] = useState(false);

  const toggleRepo = () => {
    setShowRepo(!showRepo);
  }
  
  return (
    <Container>
      <Photo src={user.photo} alt={user.name}/>

      <SideArea>
        <UpperArea
          username={user.username}
          name={user.name}
          bio={user.bio}
          photo={user.photo}
        />

        <StartArea
          repos={user.repos}
          followers={user.followers}
        />

        <DeployBtn onClick={toggleRepo}>...
        </DeployBtn>
        {showRepo && (
        <RepoArea
          nameRepo= {user.repoName}
          descriptionRepo= {user.repoDescription}
        />
        )}
      </SideArea>
    </Container>

  );
};
const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Photo = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;
const SideArea = styled.div`
  width: 100%;
`;
const DeployBtn= styled.button`
  margin-top: 1.0rem;
  margin-left: 45.9rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: transparent;
  font-size: 5.0rem;
  border: 1px solid transparent;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textBolded};
`;

