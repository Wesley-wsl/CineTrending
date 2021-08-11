import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #00020b;
    flex-wrap: wrap;
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
            transition: filter 0.2s;

            a {
                text-decoration: none;
            }

            &:hover {
                filter: invert(50%) sepia(20%);
            }
        }
        &:nth-last-child(1) {
            margin-right: 20px;
        }
    }
`;
