import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const Container = styled.div`
  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 7vw;
  padding-bottom: 4vh;
  background-color: ${Colors.white};
  justify-content: center;
  display: flex;
  align-items:center;

  @media (max-width: 767px) {
    flex-direction:column;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.div`
  white-space: pre-wrap;
  padding-top: 5%;
  font-size: 14px;
  
`;

const Image = styled.img`
  border-radius: 5px;
  max-width: 30vw;
  max-height: 15vw;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 4vw;

   @media (max-width: 767px) {
    max-width: 100%;
    max-height: 100%;
    box-shadow: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-right: 5vw;
`;

class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { title, description, image, textLeft = false } = this.props;

    const text = (
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    );

    return (
      <Container>
        {textLeft ? text : null}
        <Image src={image} />
        {textLeft ? null : text}
      </Container>
    );
  }
}

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  textLeft?: boolean;
}

export default Project;
