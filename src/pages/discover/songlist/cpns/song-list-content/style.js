import styled from 'styled-components';

export const SongListWrapper = styled.div`
  padding: 0 40px;
  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;

      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }

        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 91px;
        }

        .singer {
          width: 70px;
        }
      }

      tbody {
        .artist {
            cursor: pointer;
            &:hover {
              text-decoration: underline
            }
          }

        td {
          padding: 6px 10px;
          
        }
        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }
        .rank-num {
          display: flex;
          justify-content: space-between;
          .play {
            cursor: pointer;
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            &:hover {
              background-position: 0 -128px;
            }
          }

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          max-width: 217px;
          display: flex;
          align-items: center;
          .name {
            cursor: pointer;
            margin-left: 10px;
            &:hover {
              text-decoration: underline;
            }
          }

        }

        .album {
          max-width: 107px;
          .album-name {
            cursor: pointer;
            margin-left: 10px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`