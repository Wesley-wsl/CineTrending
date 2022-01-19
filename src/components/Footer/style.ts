import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    padding-bottom: 140px;
    margin-top: 200px;
    height: 170px;

    h1 {
        margin-top: 20px;
        font-size: clamp(35px, 5vw, 48px);
        font-weight: bold;

        span {
            font-weight: 300;
        }
    }

    p {
        font-size: clamp(16px, 4vw, 24px);
        font-weight: 300;
        a {
            text-decoration: underline;
        }
    }
`;
