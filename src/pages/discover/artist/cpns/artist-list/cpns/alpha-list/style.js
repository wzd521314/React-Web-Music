import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.hasTop ? "20px": 0};

  .item {
    padding: 1px 4px;
    border-radius: 3px;
    a {
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .active1 {
    background-color: #c20c0c;
    a {
      color: #fff;
    }
  }
`