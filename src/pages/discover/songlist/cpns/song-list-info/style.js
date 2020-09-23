import styled from "styled-components";

export const SonglistHeaderWrapper = styled.div`
  display: flex;
  padding: 20px;

  .image {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    img {
      width: 200px;
      height: 200px;
    }

    .image_cover {
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;
    .title {
      color: #333;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      .title-icon {
        display: inline-block;
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
        margin-right: 10px;
      }
    }

    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 10px 0 20px;
      .creator {
        margin-left: 5px;
        cursor: pointer;
        color: #0c73c2;
        &:hover {
          text-decoration: underline;
        }
      }
      .createTime {
        margin-left: 8px;
        color: #999;
      }
      .update-f {
        color: #999;
      }
    }

    .tag-group {
      margin: 25px 0 5px 0;
      display: flex;
      align-items: center;
      .tag {
        text-shadow: 0 1px #fdfdfd;
        margin-right: 10px;
        height: 22px;
        width: 48px;
        line-height: 22px;
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: #fefefe;
        }
        i {
          color: #777;
        }
      }
    }
  }
`