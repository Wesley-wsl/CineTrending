import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: var(--secondary);
    align-items: center;
    padding: 16px;

    h1 {
        margin: 0 20px;
        font-size: clamp(25px, 3vw, 32px);
    }
`;

export const SearchMovie = styled.div`
    position: relative;
    width: 300px;

    input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: var(--primary);
        padding-left: 12px;
        color: #e2e2e2e2;

        &::placeholder {
            color: #e2e2e2e2;
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        bottom: 0;
        border: none;
        background-color: transparent;
        text-align: center;
        cursor: pointer;

        i {
            color: #fff;
        }
    }
`;
