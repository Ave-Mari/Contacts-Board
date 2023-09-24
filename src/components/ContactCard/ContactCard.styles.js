import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background: #7434eb;
  border-radius: 26px;
  width: 145px;
  height: 124px;
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
    font-size: 19px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 500;
  }

  .btnShowMore {
    font-weight: 1000;
    font-size: 30px;
    background: none;
    border: none;
    color: #fff;
    position: absolute;
    bottom: 2%;
    right: 9%;

    &:hover {
        color: #00ff9f;
        cursor: pointer;
    }
  }
`;
