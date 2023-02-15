import { MainContainer, Avatar, Content, RedeSocialContainer } from './styles'
import avataPersonImg from '../../assets/avatar-person.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface MainProps {
  login: string
  company: string
  avatar: string
  followers: string
  name: string
  bio: string
}

export function Main({
  login,
  company,
  avatar,
  followers,
  name,
  bio,
}: MainProps) {
  return (
    <MainContainer>
      <Avatar src={avatar || avataPersonImg} />
      <Content>
        <div>
          <h1>{name}</h1>
          <a href="#">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>{bio}</p>

        <RedeSocialContainer>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            {company || 'Não informado'}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </li>
        </RedeSocialContainer>
      </Content>
    </MainContainer>
  )
}
