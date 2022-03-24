import * as Styled from "./styled";
import Post from "../../components/smart/Post";
import cat01 from "../../assets/cat01.jpg";
import cat02 from "../../assets/cat02.jpg";

function Feed() {
  return (
    <Styled.Container>
      <Post
        profile={{ name: "gato-persa", picture: cat01 }}
        post={cat01}
        description="Se Alongando ao ar livre"
        pastTime="12 dias atrás"
      />
      <Post
        profile={{ name: "maine.coon", picture: cat02 }}
        post={cat02}
        description="Dando uma volta para aquecer as patas"
        pastTime="15 dias atrás"
      />
    </Styled.Container>
  );
}
export default Feed;
