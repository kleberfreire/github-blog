import styled from 'styled-components'

export const ContainerPost = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 10px;

  border: 2px solid transparent;

  div {
    display: flex;

    h1 {
      color: ${({ theme }) => theme['base-title']};
      font-weight: bold;
      font-size: 1.25rem;
      flex: 1;
      margin-right: 1rem;
    }

    time {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1.25rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
    cursor: pointer;
  }
`
