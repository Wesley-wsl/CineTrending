import styled from 'styled-components';

export const DetailsStyle = styled.main`
    max-width: 100%;
    position: relative;
    justify-content: space-between;
    align-items: center;
`;

export const BackgroundImage = styled.img`
    filter: opacity(60%) contrast(150%);
    width: 100%;
    height: 300px;
    z-index: -1;
    object-fit: cover;
`;

export const MainInformations = styled.div`
    display: flex;
    justify-content: start;
    align-items: end;
    flex-direction: none;
    margin-top: -170px;
    margin-left: 100px;

    div {
        max-width: 500px;
        overflow: hidden;
        h2 {
            font-size: clamp(20px, 5vw, 36px);
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        button {
            padding: 5px;
            background-color: var(--button);
            border-radius: 2px;
            border: none;
            cursor: pointer;
            margin-left: 30px;
            margin-top: 20px;

            a {
                color: #000;
            }

            &:hover {
                background-color: #ffd600;
            }
        }
    }

    @media (max-width: 750px) {
        margin-left: 20px;
        img {
            width: 180px;
        }
    }

    @media (max-width: 520px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            max-width: 200px;
        }

        img {
            margin-bottom: 20px;
        }
    }
`;

export const Poster = styled.img`
    align-items: center;
    margin-right: 7%;
    width: 200px;
    filter: brightness(90%) contrast(150%);
    border-radius: 10px;
`;

export const Overview = styled.div`
    max-width: 1000px;
    margin-top: 50px;
    margin-left: 100px;
    padding-right: 30px;

    h2 {
        margin-bottom: 10px;
    }

    @media (max-width: 750px) {
        margin-left: 20px;
    }
`;
