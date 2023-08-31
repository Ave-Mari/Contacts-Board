import styled from 'styled-components';

export const Block = styled.div`
    position: absolute;
    top: 10%;
    width: ${props => props.view === 'create-contact' || 'info' ? '493px' : props => props.view === 'contact-more' ? '391px' : null};
    height: ${props => props.view === 'create-contact' ? '455px' : props => props.view === 'contact-more' || 'info' ? '352px' : null};  
    padding: 40px 22px;
    color: #fff;
    border-radius: 26px;
    background: #7434EB;
    

    .close-btn {
        position: absolute;
        background: none;
        border: none;
        font-size: 30px;
        color: #fff;
        right: 4%;
        top: 2%;      
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




    //////////////

    .radio-block {
      display: flex;
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
            content: '';
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
              background-color: #15013B;
              box-shadow: inset 0 0 0 4px #fff;
            }
          }
        }
        &:focus {
          + .radio-label {
            &:before {
              outline: none;
              border-color: #15013B;
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

   

`