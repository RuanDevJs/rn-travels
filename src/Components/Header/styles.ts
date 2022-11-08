import { Image, TextInput } from "react-native";
import styled from "styled-components/native";

import { Device } from "../../helpers";

export const Container = styled.View`
  width: 100%;
  height: ${Device.width * 0.42}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_500Medium};
  font-size: ${({ theme }) => theme.FONTS_SIZE.md}px;
  color: ${({ theme }) => theme.COLORS.dark};
`;

export const Profile = styled(Image)`
  width: ${Device.width * 0.15}px;
  height: ${Device.width * 0.15}px;
  border-radius: 50px;
`;

