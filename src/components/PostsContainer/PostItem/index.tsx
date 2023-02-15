import {
  formatDateDistanceToNow,
  formatForDatetime,
} from '../../../utils/formatDate'
import { ContainerPost, Content } from './styles'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  title: string
  updatedAt: Date
  bodyData: string
  numberId: number
}

export function PostItem({
  title,
  updatedAt,
  bodyData,
  numberId,
}: PostItemProps) {
  const navigate = useNavigate()

  return (
    <ContainerPost onClick={() => navigate('/posts/' + numberId)}>
      <div>
        <h1>{title}</h1>
        <time dateTime={formatForDatetime(updatedAt)}>
          {formatDateDistanceToNow(updatedAt)}
        </time>
      </div>
      <Content>
        <ReactMarkdown>{bodyData}</ReactMarkdown>
      </Content>
    </ContainerPost>
  )
}
