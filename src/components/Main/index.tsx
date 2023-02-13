import { MainContainer, Avatar, Content, RedeSocialContainer } from './styles'
import avataPersonImg from '../../assets/avatar-person.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Main() {
  return (
    <MainContainer>
      <Avatar src={avataPersonImg} />
      <Content>
        <div>
          <h1>Cameron Williamson</h1>
          <a href="#">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <RedeSocialContainer>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </RedeSocialContainer>
      </Content>
    </MainContainer>
  )
}
