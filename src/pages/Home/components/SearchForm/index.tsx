import { Container } from './styles'

interface SearchFormProps {
  publicationAmount: number
  handleSearch: (value: string) => void
}

export function SearchForm({
  publicationAmount,
  handleSearch,
}: SearchFormProps) {
  let delayGet: any

  function SearchForm(value: string) {
    clearInterval(delayGet)
    delayGet = setTimeout(() => {
      handleSearch(value)
      console.log('buscou', value)
    }, 3000)
  }

  return (
    <Container>
      <div>
        <h2>Publicações</h2>
        <span>{publicationAmount} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar..."
        // value={}
        onChange={(e) => SearchForm(e.target.value)}
      />
    </Container>
  )
}
