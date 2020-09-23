import styled from 'styled-components';

export const LikedPeopleWrapper = styled.div`
  .img-group {
    padding-bottom: 25px;
    .img-item {
      display: inline-block;
      padding-left : 13px;
      padding-bottom: 13px;
    }
    .img-item:nth-child(1) {
      padding-left: 0;
    }
    .img-item:nth-child(5) {
      padding-left: 0;
    }
  }
`