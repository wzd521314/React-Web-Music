import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  overflow: auto;
  width: 553px;
  padding: 2px;
  &::-webkit-scrollbar {
    width: 0;
  }
  .tips {
    position: absolute;
    color: #aaa;
    left: 50%;
    top: 50%;
    transform: translate(-50% -50%)
  }
  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }
    &:hover {
      color: #fff;
      background-color: #000;

    }
  }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        cursor: pointer;
        width: 14px;
        height: 16px;
        background-position: -51px 0;
        &:hover {
          background-position: -51px -20px;
        }
      }
    
  }
`