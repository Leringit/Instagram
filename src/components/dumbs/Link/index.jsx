import * as Styled from './styled'

function Link (props) {
  return <Styled.Link href={props}>{props.children}</Styled.Link>
}

export default Link