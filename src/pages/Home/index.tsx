import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { PostsContainer } from '../../components/PostsContainer'
import { UsernameContext } from '../../contexts/usernameContext'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const { issues, account } = useContext(UsernameContext)
  const { login, company, avatar_url: avatar, followers, name, bio } = account
  return (
    <>
      <Header />
      <Main
        login={login}
        company={company}
        avatar={avatar}
        followers={followers}
        name={name}
        bio={bio}
      />
      <SearchForm publicationAmount={issues.total_count as number} />
      <PostsContainer data={issues.items} />
    </>
  )
}
