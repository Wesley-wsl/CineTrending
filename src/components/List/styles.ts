import styled from 'styled-components';

export const ListStyle = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    div {
        background-color: #00052a;
        width: 185px;
        border-radius: 10px;
        margin: 0 30px 40px 0;
        cursor: pointer;
        transition: filter 0.2s;
        &:hover {
            filter: grayscale(100%) brightness(80%);
        }

        img {
            border-radius: 10px 10px 0 0;
        }

        p {
            text-align: center;
            padding: 5px;
        }

        .year {
            font-size: 12px;
            opacity: 0.5;
        }
    }
`;
