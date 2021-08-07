import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #00020b;
    color: #fff;
    align-items: center;
    padding: 13px;

    h1 {
        margin-left: 20px;
    }

    ul {
        display: flex;
        align-items: center;

        li {
            list-style: none;
            margin: 0 20px;
            a {
                text-decoration: none;
                color: #fff;
            }

            input {
                margin-right: 20px;
                background-color: #c4c4c4;
                border: none;
                border-radius: 4px;
                padding: 10px;
            }
        }
    }
`;
