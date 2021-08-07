import styled from 'styled-components';

export const HeroImage = styled.section`
    background-color: #000315;
    background-image: url('https://image.tmdb.org/t/p/original/srYya1ZlI97Au4jUYAktDe3avyA.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    color: #000315;
    position: relative;

    div {
        position: absolute;
        bottom: 50%;
        left: 5%;
        h2 {
            font-size: 40px;
        }

        p {
            font-size: 20px;
            margin: 10px 0;
        }
    }
`;
