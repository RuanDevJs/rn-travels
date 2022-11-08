import styled from "styled-components/native";
import { Device } from "../../helpers";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.72
})`
  width: 100%;
  padding: ${Device.width * 0.05}px;

  justify-content: flex-end;
  justify-items: end;
  justify-self: end;
  align-self: center;

  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.dark};
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Jost_500Medium};
  font-size: ${({ theme }) => theme.FONTS_SIZE.sm}px;  

  color: ${({ theme }) => theme.COLORS.white};
  text-align: center;
`;