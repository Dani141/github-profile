import React from 'react'
import styled from "styled-components";

interface UpperAreaProps {
  username: string;
  bio: string;
  photo: string;
}

export const UpperArea = ({username,bio,photo,}: UpperAreaProps) => {
  return (
    <>
    <Info>
        <Photo src={photo}/>
        <SideInfo>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  font-size: 1.4rem;
  line-height: 192%;
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
  display: grid;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    span:last-of-type {
      grid-column: 2 /3;
      grid-row: 1 /2;
      justify-self: end;
    }
  }
`;

const Username = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #0079ff;
  margin-bottom: 0.6rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

export default UpperArea