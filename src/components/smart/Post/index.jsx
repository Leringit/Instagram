import * as Styled from "./styled";
import Row from "../../dumbs/Row";

function Post(props) {
  return (
    <Styled.Container>
      <Styled.SpacedRow>
        <Styled.Profile>
          <Styled.Picture src={props.profile.picture} />
          <Styled.Name>{props.profile.name}</Styled.Name>
        </Styled.Profile>
        <Styled.Dots />
      </Styled.SpacedRow>
      <Styled.PostImage src={props.post} />
      <Styled.SpacedRow>
        <Row>
          <Styled.Heart />
          <Styled.Balloon />
          <Styled.Send />
        </Row>
        <Styled.Save />
      </Styled.SpacedRow>
      <Styled.Footer>
        <Styled.Content>
          <Styled.Name>{props.profile.name}</Styled.Name>
          <Styled.Description>{props.description}</Styled.Description>
        </Styled.Content>
        <Styled.PastTime>{props.pastTime}</Styled.PastTime>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Post;
