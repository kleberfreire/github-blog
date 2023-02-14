import { formatDateDistanceToNow } from '../../../utils/formatDate'
import { ContainerPost } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostItemProps {
  title: string
  updatedAt: Date
  bodyData: string
}

export function PostItem({ title, updatedAt, bodyData }: PostItemProps) {
  console.log(formatDateDistanceToNow(new Date(updatedAt)))
  return (
    <ContainerPost>
      <div>
        <h1>{title}</h1>
        {/* <time dateTime={dayjs.locale()}>{dayjs('1999-01-01').toNow()}</time> */}
        <time dateTime="2008-02-14 20:00">
          {formatDateDistanceToNow(new Date(updatedAt))}
        </time>
      </div>

      <ReactMarkdown>{bodyData}</ReactMarkdown>
    </ContainerPost>
  )
}
