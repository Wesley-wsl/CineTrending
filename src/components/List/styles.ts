import styled from 'styled-components';

export const ListStyle = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    letter-spacing: 1px;

    div {
        background-color: var(--secondary);
        width: 180px;
        border-radius: 10px;
        margin: 0 35px 40px 10px;
        cursor: pointer;
        transition: all 0.2s linear;
        overflow: hidden;

        img {
            transition: all 0.2s linear;
            filter: contrast(110%);
            border-radius: 10px 10px 0 0;
            height: 270px;
        }

        &:hover {
            filter: contrast(150%);
        }

        p {
            text-align: center;
            padding: 5px;
            padding-left: 10px;
            font-size: 15px;
            font-weight: bold;
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .year {
            text-align: center;
            font-size: 12px;
            opacity: 0.5;
            font-weight: 300;
            margin-bottom: 5px;
        }
    }

    @media (max-width: 1084px) {
        div {
            margin-right: 10px;
        }
    }
`;

export const Anything = styled.h1`
    text-align: center;
    letter-spacing: 4px;
    margin-top: 180px;
`;

export const ListName = styled.h2`
    font-size: clamp(20px, 4vw, 30px);
    margin: 50px 110px;
    max-width: 1110px;

    @media (max-width: 1100px) {
        margin-left: 50px;
    }
`;
