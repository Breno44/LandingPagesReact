import { Heading } from "../../components/Heading";
import { TextComponent } from "../../components/TextComponent";
import * as Styled from "./styles";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello</Heading>
        <TextComponent>Teste TextComponent</TextComponent>
      </Styled.Wrapper>
    </div>
  );
}
