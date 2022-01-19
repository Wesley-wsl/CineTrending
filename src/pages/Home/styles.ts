import styled from 'styled-components';

export const HeroImage = styled.section`
    position: relative;
    img {
        width: 100%;
        margin: 0 auto;
        height: 640px;
        object-fit: cover;
        filter: opacity(40%) contrast(150%);
    }

    div {
        max-width: 750px;
        justify-content: justify;
        position: absolute;
        bottom: 150px;
        left: 130px;
        letter-spacing: 1px;

        h1 {
            font-weight: bold;
            font-size: clamp(20px, 5vw, 50px);
        }

        p {
            margin-top: 35px;
            font-weight: 400;
            font-size: clamp(16px, 2vw, 20px);
        }
    }

    @media (max-width: 980px) {
        div {
            left: 20px;
            margin-right: 20px;
        }
    }
`;

export const ListName = styled.h2`
    font-size: clamp(20px, 4vw, 30px);
    margin: 50px 110px;
    max-width: 1110px;

    @media (max-width: 1100px) {
        margin-left: 50px;
    }
`;
