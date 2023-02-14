import { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { UsernameContext } from '../../contexts/usernameContext'
import api from '../../lib/axios'
import { HeaderPost } from './HeaderPost'

export function Post() {
  const [data, setData] = useState()
  const { numberId } = useParams()
  const { repository, username } = useContext(UsernameContext)

  async function getData(num: string | undefined) {
    const response = await api.get(
      `https://api.github.com/repos/${username}/${repository}/issues/${num}`,
    )

    setData(response.data)
    console.log(response.data)
  }

  function isValidId(value: string | undefined) {
    return value ? Number.isInteger(parseInt(value)) : false
  }

  useEffect(() => {
    if (isValidId(numberId)) {
      getData(numberId)
    }
  }, [numberId])

  return (
    <>
      <Header />
      <HeaderPost />
      {data && <ReactMarkdown>{data?.body}</ReactMarkdown>}
    </>
  )
}
