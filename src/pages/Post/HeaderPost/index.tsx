import { MainContainer, Content, RedeSocialContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  formatDateDistanceToNow,
  formatForDatetime,
} from '../../../utils/formatDate'

interface HeaderPostProps {
  login: string
  url: string
  title: string
  createdAt: string
  comments: number
}
export function HeaderPost({
  login,
  url,
  title,
  createdAt,
  comments,
}: HeaderPostProps) {
  console.log(formatForDatetime(createdAt))

  return (
    <MainContainer>
      <Content>
        <div>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} /> voltar
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{title}</h1>

        <RedeSocialContainer>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <time dateTime={formatForDatetime(createdAt)}>
              {formatDateDistanceToNow(createdAt)}
            </time>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            {comments} comentários
          </li>
        </RedeSocialContainer>
      </Content>
    </MainContainer>
  )
}
