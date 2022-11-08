import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Title>Where do you {'\n'}want to discover ?</Styled.Title>
      <Styled.Profile
        source={{
          uri: 'https://avatars.githubusercontent.com/u/82915279?v=4',
        }}
        resizeMode='cover'
      />
    </Styled.Container>
  )
}