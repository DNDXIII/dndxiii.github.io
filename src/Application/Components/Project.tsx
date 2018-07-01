import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const Container = styled.div`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-bottom: 7vw;
  background-color: ${Colors.white};
  justify-content: center;
  display: flex;
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
  border-width: 3px;
  border-style: solid;
  border-color: ${Colors.grey};
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
