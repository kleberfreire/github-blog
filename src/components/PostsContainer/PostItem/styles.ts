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

  &:hover {
    transition: border 0.2s;
    border-color: ${({ theme }) => theme['base-label']};
    cursor: pointer;
  }
`

export const Content = styled.div`
  /* width: 100%; */
  /* overflow: hidden; */
  /* padding: 0 2rem; */
  /* display: flex; */
  /* flex-direction: column; */
  overflow: hidden;

  * {
    display: none;
  }

  & > p:nth-child(1) {
    margin-top: 1.25rem;
    display: block;
    position: relative;
  }
`
