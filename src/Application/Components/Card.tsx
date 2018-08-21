import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

const Container = styled.div`
  width: 40vw;
  padding: 3%;
  margin-left: 100px;
  margin-bottom: 5vh;
  background-color: ${Colors.white};

  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.6s cubic-bezier(0.16, 0.8, 0.4, 1);
  transition: all 0.6s cubic-bezier(0.16, 0.8, 0.4, 1);

  &::after {
    content: '';
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.16, 0.8, 0.4, 1);
    transition: all 0.6s cubic-bezier(0.16, 0.8, 0.4, 1);
  }

  &:hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight:bold;
`;

const SubTitle = styled.div`
  padding-top: 1%;
  color: ${Colors.grey};
  font-size: 18px;
`;

const Description = styled.div`
  white-space: pre-wrap;
  padding-top: 8%;
  font-size: 14px;
`;

const Icon = styled.img`
  float: right;
  width: 50px;
  height: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class Card extends React.Component<CardProps, {}> {
  render() {
    const { title, subtitle, description, icon } = this.props;
    return (
      <Container>
        <HeaderContainer>
          <TitleContainer>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </TitleContainer>
          <Icon src={icon} />
        </HeaderContainer>
        <Description>{description}</Description>
      </Container>
    );
  }
}

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export default Card;
