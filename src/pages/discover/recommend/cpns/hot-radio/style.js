import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          font-weight: 700;
          margin-top: 3px;
          a {
            color: #000;
          }
          .vip {
            display: inline-block;
            margin-left: 2px;
            vertical-align: middle;
            background-position: 0 1px;
            width: 11px;
            height: 13px;
            font-size: 100%;
            font-style: normal;
          }
        }

        .position {
          color: #666;
        }
      }
    }
  }
`

