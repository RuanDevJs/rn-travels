import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react-native";
import { FlatList, TextInput } from "react-native";

import styled from "styled-components/native";
import { Device } from "../../helpers";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${`${Device.width * 0.08}px 18px`};
`;

export const Form = styled.View`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  height: ${Device.width * 0.15}px;
  padding: 2px;
`;

export const InputArea = styled.View`
  width: 100%;
  height: ${Device.width * 0.18}px;
  border: 2px solid ${({ theme }) => theme.COLORS.grey_secondary};
  border-radius: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 12px;
  margin-bottom: 12px;
`;

export const Input = styled(TextInput)`
  flex: 4;
  width: 100%;
  height: ${Device.width * 0.15}px;

  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.sm}px;
  color: ${({ theme }) => theme.COLORS.dark}px;

  letter-spacing: 0.25px;
  padding: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_500Medium};
  font-size: ${({ theme }) => theme.FONTS_SIZE.md}px;
  color: ${({ theme }) => theme.COLORS.dark};
  margin-bottom: 12px;
`;

export const Wrap = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 20px;
`;

export const CategoryList = styled(FlatList)`
  flex: 1;
`;

export const Icon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.grey
}))`
  flex: 1;
`;

export const IconSliders = styled(SlidersHorizontal).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.dark
}))`
  flex: 1;
`;
