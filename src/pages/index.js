import { PlayVideo } from "../components/PlayVideo";
import { ListVideo } from "../components/ListVideo";

import * as S from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <S.Container>
        <PlayVideo />
        <ListVideo />
      </S.Container>
    </>
  );
}
