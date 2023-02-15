import { PostItem } from './PostItem'
import { Container } from './styles'

interface PostsContainerProps {
  data: Array<any>
}

export function PostsContainer({ data = [] }: PostsContainerProps) {
  return (
    <Container>
      {data.length > 0 &&
        data.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            updatedAt={post.updated_at}
            bodyData={post.body}
            numberId={post.number}
          />
        ))}
    </Container>
  )
}
