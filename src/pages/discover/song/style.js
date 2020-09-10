import styled from 'styled-components';

export const SongWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const SongLeft = styled.div`
  width: 710px;
`

export const SongRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`