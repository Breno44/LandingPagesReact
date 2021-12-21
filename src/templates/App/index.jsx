import { Heading } from "../../components/Heading";
import * as Styled from "./styles";

export function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <Heading>O texto que eu quero</Heading>
      </Styled.Wrapper>
    </div>
  );
}
