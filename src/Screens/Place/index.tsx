import { useState } from "react";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated,
{
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
}
  from "react-native-reanimated";

import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "../../Components/Button";

import { useTheme } from "styled-components/native";
import { PlaceScreenRouteProp } from "../../types/Routes";

import face1 from "../../assets/face-1.jpg";
import face2 from "../../assets/face-2.jpg";
import face3 from "../../assets/face-3.jpg";
import face4 from "../../assets/face-4.jpg";

import * as Styled from './styles';
import { Device } from "../../helpers";

export default function Place() {
  const theme = useTheme();
  const [actived, setActived] = useState(false)

  const navigation = useNavigation();
  const { params } = useRoute<PlaceScreenRouteProp>();

  const context = useSharedValue(0);
  const translateY = useSharedValue(0);

  const MOBILE = {
    offsetTop: -Device.width * 0.01,
    offsetBottom: Device.width * 0.72
  };

  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      context.value = translateY.value;
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value;

      if (translateY.value <= MOBILE.offsetTop) {
        translateY.value = MOBILE.offsetTop;
      } else if (translateY.value >= MOBILE.offsetBottom) {
        translateY.value = MOBILE.offsetBottom;
      }
    });

  const menuStyled = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(translateY.value, {
            damping: 100
          })
        }
      ]
    }
  });

  const sImage = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(
            interpolate(
              translateY.value,
              [MOBILE.offsetBottom, MOBILE.offsetTop],
              [200, -220]
            )
            , { damping: 50 })
        }
      ],
      opacity: interpolate(translateY.value, [MOBILE.offsetBottom, MOBILE.offsetTop], [1, 0])
    }
  });

  const handleNavigate = () => {
    navigation.navigate('Home');
  }

  const handleLike = () => {
    setActived(!actived);
  }

  return (
    <Styled.Container>
      <Styled.Background
        source={{ uri: params.additional_info?.picture }}
        resizeMode='cover'
        blurRadius={8}
      >
        <Styled.Poster style={sImage} source={{ uri: params.additional_info?.picture }} />
        <GestureDetector gesture={gestureHandler}>
          <Styled.MenuContainer style={menuStyled}>
            <Styled.Menu>
              <Styled.MenuHeading>
                <Styled.Title>{params.title}</Styled.Title>
                <Styled.Price style={{ color: theme.COLORS.orange }}>
                  $ <Styled.Price>{params.additional_info?.price}</Styled.Price>
                </Styled.Price>
              </Styled.MenuHeading>
              <Styled.MenuHeading>
                <Styled.LocaleHeading>
                  <Styled.IconMap />
                  <Styled.Locale>{params.locale}</Styled.Locale>
                </Styled.LocaleHeading>
                <Styled.Locale>
                  /per person
                </Styled.Locale>
              </Styled.MenuHeading>
              <Styled.DescriptionWrap>
                <Styled.Description>{params.description}</Styled.Description>
              </Styled.DescriptionWrap>
              <Styled.RateHeading>
                <Styled.LocaleHeading>
                  <Styled.ProfileRate source={face1} index={1} />
                  <Styled.ProfileRate source={face2} index={2} />
                  <Styled.ProfileRate source={face3} index={3} />
                  <Styled.ProfileRate source={face4} index={4} />
                  <Styled.MembersContainer>
                    <Styled.Members>+3 members</Styled.Members>
                  </Styled.MembersContainer>
                </Styled.LocaleHeading>
                <Styled.LocaleHeading>
                  <Styled.IconStar />
                  <Styled.StarRate>{params.additional_info?.star}</Styled.StarRate>
                </Styled.LocaleHeading>
              </Styled.RateHeading>
              <Styled.Button>
                <Button />
              </Styled.Button>
            </Styled.Menu>
          </Styled.MenuContainer>
        </GestureDetector>
      </Styled.Background>
      <Styled.Header>
        <Styled.HeaderContainer>
          <Styled.IconButtonBackground
            source={{ uri: params.additional_info?.picture }}
            resizeMode='cover'
            blurRadius={32}
            borderRadius={50}
          >
            <Styled.IconButton onPress={handleNavigate}>
              <Styled.CaretLeftIcon />
            </Styled.IconButton>
          </Styled.IconButtonBackground>
          <Styled.IconButtonBackground
            source={{ uri: params.additional_info?.picture }}
            resizeMode='cover'
            blurRadius={32}
            borderRadius={50}
          >
            <Styled.IconButton onPress={handleLike}>
              <Styled.HeartIcon active={actived} />
            </Styled.IconButton>
          </Styled.IconButtonBackground>
        </Styled.HeaderContainer>
      </Styled.Header>
    </Styled.Container>
  )
}