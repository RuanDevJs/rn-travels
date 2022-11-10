import styled from "styled-components/native";

import AnimatedLottieView from "lottie-react-native";
import { Device } from "../../helpers";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Lottie = styled(AnimatedLottieView)`
  width: ${Device.width * 0.74}px;
  height: ${Device.width * 0.74}px;

  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONTS_SIZE.md}px;
  color: ${({ theme }) => theme.COLORS.grey};
`;