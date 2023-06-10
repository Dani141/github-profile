import React from 'react'
import styled from "styled-components";

interface UpperAreaProps {
  username: string;
  name: string;
  bio: string;
  photo: string;
  repoName: [];
  repoDescription: [];

}

export const UpperArea = ({username,name,bio,photo}: UpperAreaProps) => {
  return (
    <>
    <Info>
        <Photo src={photo} alt={name}/>
        <SideInfo>
        <Name>{name}</Name><br/>
        <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
        </Username>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  );
};
const Name = styled.strong`
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 0.4rem;
  color: ${(props) => props.theme.colors.textBolded};

  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Username = styled.span`
  font-size: 1.4rem;
  color: #0079ff;
  line-height: 4.8rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    left: 4em;

  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  font-size: 1.4rem;
  line-height: 2.1rem;
  margin: 3.3rem 0 2.3rem;

  @media (min-width: 768px) {
    margin: 2.2rem 0 3.3rem;
    font-size: 1.6rem;
  }
`;

const Photo = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-right: 2rem;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
    margin-right: 4.1rem;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const SideInfo = styled.div`
  @media (min-width: 900px) {
    width: 100%;
  }
`;



