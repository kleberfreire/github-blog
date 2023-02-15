import { Container } from './styles'

interface SearchFormProps {
  publicationAmount: number
}

export function SearchForm({ publicationAmount }: SearchFormProps) {
  return (
    <Container>
      <div>
        <h2>Publicações</h2>
        <span>{publicationAmount} publicações</span>
      </div>
      <input type="text" placeholder="Buscar..." />
    </Container>
  )
}
