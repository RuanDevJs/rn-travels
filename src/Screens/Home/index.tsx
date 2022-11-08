import { useEffect, useState } from "react";
import { FlatList, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";

import Header from "../../Components/Header";
import Category from "../../Components/Category";
import Poster from "../../Components/Poster";

import PlacesData from "../../services/places";
import Categorys from "../../services/category";

import { PlaceProps } from "../../types/Services"

import * as Styled from "./styles";
import { Device } from "../../helpers";

export default function Home() {
  const [places, setPlaces] = useState<PlaceProps[]>(PlacesData);
  const [categorys, setCategorys] = useState(Categorys);

  function handlePress(currentIndex: number) {
    const activeCategory = categorys.map((el, index) => {
      if (index === currentIndex) {
        el.active = !el.active
      }

      return el;
    });

    setCategorys(activeCategory);
  }

  return (
    <TouchableWithoutFeedback style={{ backgroundColor: 'red' }} onPress={Keyboard.dismiss}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Styled.Container>
          <Header />
          <Styled.Form>
            <Styled.InputArea>
              <Styled.Button activeOpacity={0.45}>
                <Styled.Icon />
              </Styled.Button>
              <Styled.Input
                placeholder="Search"
                autoCorrect={false}
              />
              <Styled.Button activeOpacity={0.72}>
                <Styled.IconSliders />
              </Styled.Button>
            </Styled.InputArea>
          </Styled.Form>
          <Styled.Wrap>
            <Styled.Title>
              Categories
            </Styled.Title>
            <FlatList
              data={categorys}
              keyExtractor={((_, index) => `key=${index}`)}
              renderItem={({ item, index }) => (
                <Category
                  onPress={() => handlePress(index)}
                  data={item}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Styled.Wrap>
          <Styled.Wrap style={{ marginBottom: 20 }}>
            <FlatList
              data={places}
              keyExtractor={((_, index) => `place_key=${index}`)}
              renderItem={({ item, index }) => <Poster data={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={true}
              decelerationRate={0}
              pagingEnabled
              scrollEventThrottle={16}
              snapToInterval={(Device.width * 0.82)}
            />
          </Styled.Wrap>
        </Styled.Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}