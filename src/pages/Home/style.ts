import styled from 'styled-components';

export const HeroImage = styled.section`
    img {
        width: 100%;
        margin: 0 auto;
    }
`;

export const ListName = styled.div`
    h2 {
        font-size: 30px;
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 7.5%;
    }

    @media (max-width: 302px) {
        h2 {
            font-size: 20px;
        }
    }
`;
