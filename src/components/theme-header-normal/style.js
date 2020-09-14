import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  font-size: 24px;
  .title {
    margin-right: 20px;
  }
  .keyword {
      display: flex;
      align-items: center;
      .item {
        font-size: 12px;
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }

`
