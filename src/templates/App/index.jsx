import { Heading } from "../../components/Heading";
import { MenuLink } from "../../components/MenuLink";
import { TextComponent } from "../../components/TextComponent";
import * as Styled from "./styles";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello</Heading>
        <TextComponent>Teste TextComponent</TextComponent>
        <MenuLink newTab link="https://www.google.com.br">
          Menu Link
        </MenuLink>
      </Styled.Wrapper>
    </div>
  );
}
