import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;

  .popup-block {
    position: absolute;

    top: 10%;
    width: ${(props) =>
      props.view === "create-contact"
        ? "493px"
        : (props) =>
            props.view === "contact-more"
              ? "252px"
              : (props) => (props.view === "info" ? "432px" : null)};
    height: ${(props) =>
      props.view === "create-contact"
        ? "455px"
        : (props) =>
            props.view === "info"
              ? "179px"
              : (props) => (props.view === "contact-more" ? "190px" : null)};
    padding: 40px 22px;
    color: #fff;
    border-radius: 26px;
    background: #7434eb;
  }

  .close-btn {
    position: absolute;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 30px;
    color: #fff;
    right: 4%;
    top: 2%;

    &:hover {
      color: #00ff9f;
    }
  }

  .create-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-headline {
    font-size: 31px;
    margin-top: 0;
  }

  .text-input {
    display: block;
    background: none;
    margin-bottom: 22px;
    font-size: 22px;
    color: #fff;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #fff;
    width: 90%;
    padding: 0 12px 7px 12px;
  }

  .category {
    font-size: 22px;
  }

  .add-btn {
    font-size: 25px;
    border-radius: 24px;
    background: #15013b;
    color: #fff;
    border: none;
    padding: 7px 21px;
    cursor: pointer;

    &:hover {
      background: #270569;
    }
  }

  .radio-block {
    display: flex;
    margin-bottom: 40px;
  }

  .radio-label {
    font-size: 17px;
  }

  .radio {
    margin: 0.5rem;
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        &:before {
          content: "";
          background: #fff;
          border-radius: 100%;
          border: 1px solid darken(#fff, 25%);
          display: inline-block;
          width: 1.4em;
          height: 1.4em;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: #15013b;
            box-shadow: inset 0 0 0 4px #fff;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: #15013b;
          }
        }
      }
      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px #fff;
            border-color: darken(#fff, 25%);
            background: darken(#fff, 25%);
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }

  ///////Contact Show More

  .contact-more-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image {
    background: #b5a9a9;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .name,
  .phone,
  .email {
    margin-top: 0px;
  }

  .name,
  .phone,
  .email {
    margin-bottom: 11px;
  }

  .image {
    margin-bottom: 7px;
  }

  .delete {
    background: none;
    border: none;
    position: absolute;
    top: 5%;
    left: 4%;
  }

  .delete-img {
    width: 23px;
  }

  //////Info

  .info-content {
    .info-text {
      font-size: 19px;
      margin-top: 0;

      a {
        font-size: 19px;
        padding: 3px 12px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          background: #15013b;
          border-radius: 18px;
        }
      }
    }
  }
`;
