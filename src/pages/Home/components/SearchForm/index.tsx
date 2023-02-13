import { Container } from './styles'

export function SearchForm() {
  return (
    <Container>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar..." />
    </Container>
  )
}
