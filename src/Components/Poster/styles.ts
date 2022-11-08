import { Image, ImageBackground } from "react-native";

import { Heart } from "phosphor-react-native";
import { AntDesign } from '@expo/vector-icons';

import { Device } from "../../helpers";

import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Device.width * 0.82}px;
`;

export const Content = styled.View`
  margin-right: 12px;
`;

export const Thumb = styled(Image)`
  width: 100%;
  height: ${Device.width * 1}px;

  border-radius: 32px;
`;

export const Menu = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  left: ${Device.width * 0.02}px;
  top: ${Device.width * 0.03}px;
`;

export const Rate = styled(ImageBackground).attrs({
  borderRadius: 50,
  resizeMode: 'cover'
})`
  width: ${Device.width * 0.25}px;
  height: ${Device.width * 0.15}px;

  border-radius: 50px;
  opacity: 0.8;

  margin-right: ${Device.width * 0.35}px;
`;

export const Wrap = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.x_sm}px;
  color: ${({ theme }) => theme.COLORS.white};

  margin-left: 5px;
`;

export const StarIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.yellow,
  name: "star"
}))``;

export const HeartIcon = styled(Heart).attrs(({ theme, active }) => ({
  size: 32,
  color: active ? '#EA4C89' : theme.COLORS.white,
  weight: active ? "fill" : "thin"
}))``;