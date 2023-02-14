import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { PostsContainer } from '../../components/PostsContainer'
import { UsernameContext } from '../../contexts/usernameContext'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const { issues } = useContext(UsernameContext)
  return (
    <>
      <Header />
      <Main />
      <SearchForm />
      <PostsContainer data={issues} />
    </>
  )
}
