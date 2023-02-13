import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 54rem;
  /* height: 13.25rem; */
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  margin: -5.5rem auto 0 auto;
  padding: 2rem 2.5rem;
  display: flex;
`

export const Avatar = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 9.25rem;
  height: 9.25rem;
  max-height: 9.25rem;
  margin-right: 2rem;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h1 {
      flex: 1;
      display: block;
      margin-top: 0.5rem;
      color: ${({ theme }) => theme['base-title']};
    }
    a {
      align-self: start;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  p {
    margin-top: 0.5rem;
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
    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 0.5rem;
      line-height: 0;
    }
  }
`
