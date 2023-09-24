import styled from "styled-components";

export const Card = styled.div`
  background: #7434eb;
  border-radius: 26px;
  width: 145px;
  height: 121px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  .photoPrev {
    width: 50px;
    height: 50px;
    background: #acacac;
    border-radius: 50%;
    margin-bottom: 7px;
  }

  .namePrev {
    color: #fff;
    font-size: 17px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .btnShowMore {
    font-weight: 1000;
    font-size: 30px;
    background: none;
    border: none;
    color: #fff;

    &:hover {
        color: #ffb62b;
        cursor: pointer;
    }
  }
`;
