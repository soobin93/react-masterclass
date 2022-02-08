import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Container>
      <Title>Hello World!</Title>
      <Box color="teal" />
      <Circle color="tomato" />
      <MovingBox color="yellow" />
    </Container>
  )
}

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  
  50% {
    border-radius: 100px;
  }
  
  100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;

const Box = styled.div`
  background-color: ${(props) => props['color']};
  width: 100px;
  height: 100px;
  margin: 14px;
  
  &:hover {
    width: 150px;
    height: 150px;
  }
  
  &:active {
    opacity: 50%;
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const MovingBox = styled(Box)`
  animation: ${rotation} 1s linear infinite;
`;

export default App;
