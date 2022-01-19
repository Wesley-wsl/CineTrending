import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    padding-bottom: 140px;
    margin-top: 200px;
    height: 100px;
    letter-spacing: 1px;
    h1 {
        margin-top: 20px;
        font-size: clamp(25px, 5vw, 35px);
        font-weight: bold;

        span {
            font-weight: 300;
        }
    }

    p {
        font-size: clamp(14px, 4vw, 20px);
        font-weight: 300;
        a {
            text-decoration: underline;
        }
    }

    @media (max-width: 383px) {
        padding-left: 20px;
    }
`;
