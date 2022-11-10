import * as Styled from "./styles";
import LoadingIcon from "../../assets/lotties/loading.json";

export default function Loading() {
  return (
    <Styled.Container>
      <Styled.Lottie 
        source={LoadingIcon} 
        autoPlay
        loop
      />
      <Styled.Title>Loading...</Styled.Title>
    </Styled.Container>
  )
}