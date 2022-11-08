import { Image, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { Device } from "../../helpers";
import { CategoryStyleProps } from "../../types/Components/Category";

export const Container = styled(TouchableOpacity)<CategoryStyleProps>`
  width: ${Device.width * 0.42}px;
  height: ${Device.width * 0.2}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px;
  margin-right: 12px;

  background-color: ${({ theme, active }) => active ? theme.COLORS.yellow : theme.COLORS.white_secondary};
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.x_sm}px;
  color: ${({ theme }) => theme.COLORS.grey};
  padding: 12px;
`;

export const Icon = styled(Image)`
  width: ${Device.width * 0.1}px;
  height: ${Device.width * 0.1}px;
`;