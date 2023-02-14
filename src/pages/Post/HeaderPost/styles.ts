import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 54rem;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  margin: -5.5rem auto 0 auto;
  padding: 2rem 2.5rem;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      align-self: start;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.blue};
      }
    }
  }

  h1 {
    flex: 1;
    display: block;
    margin-top: 1.25rem;

    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const RedeSocialContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style-type: none;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme['base-span']};

    svg {
      color: ${({ theme }) => theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.5rem;
      line-height: 0;
    }
  }
`
