import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { PostsContainer } from '../../components/PostsContainer'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <>
      <Header />
      <Main />
      <SearchForm />
      <PostsContainer />
    </>
  )
}
