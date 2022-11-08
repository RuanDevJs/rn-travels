import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/Routes";

import { Device } from "../../helpers";
import { PosterProps } from "../../types/Components/Poster";

import * as Styled from "./styles";

export default function Poster({ data }: PosterProps) {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);

  const ITEM_SIZE = Device.width * 0.82;
  const SPACER_ITEM_SIZE = (Device.width - ITEM_SIZE) / 2;

  if(data.key){
    return <View style={{ width: SPACER_ITEM_SIZE }} />
  }

  function handleNavigation(){
    navigation.navigate('Place', data);
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <TouchableOpacity onPress={handleNavigation} activeOpacity={0.72}>
          <Styled.Thumb 
            source={{ uri: data?.additional_info?.picture }} 
            resizeMode='cover'
          />
        </TouchableOpacity>
        <Styled.Menu>
          <Styled.Rate source={{ uri: data?.additional_info?.picture }} blurRadius={32}>
            <Styled.Wrap>
              <Styled.StarIcon />
              <Styled.Title>{data.additional_info?.star}</Styled.Title>
            </Styled.Wrap>
          </Styled.Rate>
          <Styled.Rate style={{ width: 50, height: 50,borderRadius: 50}} source={{ uri: data?.additional_info?.picture }} blurRadius={32}>
            <Styled.Wrap>
              <TouchableOpacity onPress={() => setActive(!active)}>
                <Styled.HeartIcon active={active} />
              </TouchableOpacity>
            </Styled.Wrap>
          </Styled.Rate>
        </Styled.Menu>
      </Styled.Content>
    </Styled.Container>
  )
}