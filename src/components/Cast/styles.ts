import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    max-width: 75vw;
    margin-left: 100px;
    margin-top: 10px;
    max-height: 400px;

    &::-webkit-scrollbar {
        background-color: var(--primary);
        border-radius: 5px;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 5px;
        width: 5px;
    }

    @media (max-width: 750px) {
        margin-left: 20px;
    }
`;

export const Item = styled.div`
    width: 185px;
    flex: none;
    margin-right: 10px;
    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        border-radius: 15px;
        filter: brightness(90%) contrast(150%);
    }
`;

export const Title = styled.h2`
    margin-top: 50px;
    margin-left: 100px;
`;

export const Info = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    span {
        display: block;
        text-align: center;
        padding: 5px;
        border-radius: 10px;
    }
`;
