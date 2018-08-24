import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';
const github = require('../Assets/Images/Github.svg');

const Container = styled.div`
  margin: auto;
  margin-bottom: 13vh;
  max-width: 80vw;
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
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

  @media (max-width: 767px) {
    max-width: 100%;
    max-height: 100%;
    box-shadow: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 3vw;
`;

const Button = styled.a`
  margin-top: 3vh;
  border-radius: 21px;
  height: 42px;
  width: 42px;
  background-color: ${Colors.black};
  text-decoration: none;
  display: flex;
  align-items: center;

  -webkit-transition: width 0.2s;
  transition: width 0.2s;

  @media (max-width: 767px) {
    margin-left: auto;
    width: 40%;
    min-width: 120px;
    color: ${Colors.white};

    & div {
      color: ${Colors.white};
    }
  }

  &:hover {
    width: 180px;
    color: ${Colors.white};
  }

  &:hover div {
    color: ${Colors.white};
  }
`;

const ButtonText = styled.div`
  margin-left: 10%;
  color: transparent;
`;

const ButtonImage = styled.img`
  background-size: 20px 20px;
  max-width: 42px;
  max-height: 42px;
`;

const ButtonImageContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: 20px;
  max-width: 41px;
  max-height: 41px;
`;

class Project extends React.Component<ProjectProps, {}> {
  render() {
    const { title, description, image, textLeft = false, url } = this.props;

    const text = (
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {url ? (
          <Button href={url}>
            <ButtonImageContainer>
              <ButtonImage src={github} />
            </ButtonImageContainer>
            <ButtonText>Github</ButtonText>
          </Button>
        ) : null}
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
  url?: string;
}

export default Project;
