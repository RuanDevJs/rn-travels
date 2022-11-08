import { useTheme } from "styled-components/native";
import { CategoryComponentProps } from "../../types/Components/Category";

import * as Styled from "./styles";

export default function Category({ data, ...props }: CategoryComponentProps) {
  const theme = useTheme()

  return (
    <Styled.Container active={data.active} activeOpacity={0.72} {...props}>
      <Styled.Icon
        //@ts-ignore
        source={data.source}
        resizeMode='cover'
      />
      <Styled.Title
        style={{
          color: data.active ? theme.COLORS.white : theme.COLORS.grey,
        }}
      >
        { data.title }
      </Styled.Title>
    </Styled.Container>
  )
}