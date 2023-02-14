import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../lib/axios'

type UsernameContext = {
  username: string
  issues: Array<string>
  repository: any
}

// eslint-disable-next-line no-redeclare
export const UsernameContext = createContext({} as UsernameContext)

interface UsernameProviderProps {
  children: ReactNode
}

// interface issuesProps {
//   url: string
//   number: string
// }

export function UsernameProvider({ children }: UsernameProviderProps) {
  const username = 'rocketseat-education'
  const repository = 'reactjs-github-blog-challenge'
  // const username = 'kleberfreire'
  // const repository = 'github-blog'
  const [issues, setIssues] = useState([])

  // https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1

  async function fetchIssues(query: string) {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repository}`,
    )

    setIssues(response.data.items)
    console.log(response.data.items)
  }

  useEffect(() => {
    fetchIssues('boas praticas')
  }, [])

  return (
    <UsernameContext.Provider value={{ username, issues, repository }}>
      {children}
    </UsernameContext.Provider>
  )
}
