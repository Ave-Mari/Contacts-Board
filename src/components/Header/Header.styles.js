import styled from 'styled-components';

export const Wrapper = styled.header`
    display: flex;
    align-items: center;  

        h1 {
        font-family: 'Permanent Marker';
        color: #15013B;
        font-size: 48px;
        margin: 0 21px 0 0;

        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
         -khtml-user-select: none;
           -moz-user-select: none; 
            -ms-user-select: none; 
                user-select: none;
        }

        button {
            background: #622CC7;
            width: 37px;
            height: 37px;
            color: #fff;
            border-radius: 50%;
            
            border: none;

            &:hover {
                background: #15013B;
                cursor: pointer;
            }
        }

        .info-btn {
            font-family: 'Crimson Text', serif;
            font-style: italic;
            font-size: 27px;
            margin-right: 8px; 
        }
        .add-btn {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 25px;
        }

`