import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground, Image, ImageProps } from "react-native";

import { Device } from "../../helpers";

import { MapPin, Star, Heart, CaretLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background: red;
`;

export const Background = styled(ImageBackground)`
  flex: 1;

  align-items: center;
  justify-content: flex-end;
`;

export const MenuContainer = styled(Animated.View)`
 
`;

export const Menu = styled.View`
  ${({ theme  }) => css`
    height: ${Device.width * 1.1}px;
    background-color: ${({ theme }) => theme.COLORS.white};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;

    padding: 12px 32px;
  `}
`;

export const MenuHeading = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.lg}px;
  color: ${({ theme }) => theme.COLORS.dark};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.x_sm}px;
  color: ${({ theme }) => theme.COLORS.grey};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_500Medium};
  font-size: ${({ theme }) => theme.FONTS_SIZE.md}px;
  color: ${({ theme }) => theme.COLORS.dark};
`;

export const LocaleHeading = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Locale = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.sm}px;
  color: ${({ theme }) => theme.COLORS.grey};
  margin-left: 4px;
`;

export const DescriptionWrap = styled.View`
  margin-top: 12px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_400Regular};
  font-size: ${({ theme }) => theme.FONTS_SIZE.x_sm}px;
  color: ${({ theme }) => theme.COLORS.grey};
`;

export const RateHeading = styled.View`
  margin-top: 18px;

  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  margin-bottom: 8px;
`;

interface ProfileRate extends ImageProps {
  index: number;
}

export const ProfileRate = styled(Image)<ProfileRate>`
  width: ${Device.width * 0.08}px;
  height: ${Device.width * 0.08}px;
  border-radius: 50px;

  left: -${({ index }) => index}0px;
`;

export const MembersContainer = styled.TouchableOpacity`
  left: -${Device.width * 0.12}px;
  background-color: #b2b1b6;

  padding: 8px;
  border-radius: 50px;

  opacity: 0.5;
`;

export const Members = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.Jost_400Regular};
    font-size: ${theme.FONTS_SIZE.x_sm}px;
    color: ${theme.COLORS.dark};
  `}
`;

export const StarRate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_700Bold};
  font-size: ${({ theme }) => theme.FONTS_SIZE.sm}px;
  color: ${({ theme }) => theme.COLORS.dark};

  margin-left: 5px;
`;

export const Button = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled(Animated.Image)`
  width: ${Device.width * 0.8}px;
  height: ${Device.width * 0.8}px;

  margin-bottom: ${Device.width * 0.05}px;
  border-radius: 8px;
`;

export const Header = styled.View`
  width: ${Device.width * 0.92}px;
  position: absolute;

  justify-content: center;
  align-self: center;

  margin-top: ${Device.width * 0.15}px;
`;

export const HeaderContainer = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity``;

export const IconButtonBackground = styled(ImageBackground)`
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;

  opacity: 0.8;
`;

export const IconMap = styled(MapPin).attrs(({ theme }) => ({
  size: 32,
  weight: "regular",
  color: theme.COLORS.orange,
}))``;

export const IconStar = styled(Star).attrs(({ theme }) => ({
  size: 32,
  weight: "fill",
  color: theme.COLORS.yellow,
}))``;

interface HeartIconProps {
  active: boolean;
}

export const HeartIcon = styled(Heart).attrs<HeartIconProps>(({ theme, active }) => ({
  size: 32,
  color: active ? "#EA4C89" : theme.COLORS.white,
  weight: active ? "fill" : "thin",
}))<HeartIconProps>``;

export const CaretLeftIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.white,
}))``;
