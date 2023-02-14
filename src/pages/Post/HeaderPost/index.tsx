import { MainContainer, Content, RedeSocialContainer } from './styles'
import ReactMarkdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function HeaderPost() {
  return (
    <MainContainer>
      <Content>
        <div>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </a>
          <a href="#">
            ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>

        <RedeSocialContainer>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <time dateTime="2008-02-14 20:00">Há 1 dia</time>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </RedeSocialContainer>
      </Content>
    </MainContainer>
  )
}
