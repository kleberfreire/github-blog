import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;
  max-width: 54rem;
  margin: 4.5rem auto 0 auto;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: bold;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme['base-label']};
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
