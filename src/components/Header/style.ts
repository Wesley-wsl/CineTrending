import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #00020b;
    color: #fff;
    align-items: center;
    padding: 16px;
    position: relative;
    h1 {
        margin-left: 20px;
    }

    ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li {
            list-style: none;
            margin: 0 20px;
            transition: filter 0.2s;
            cursor: pointer;
            &:hover {
                filter: invert(50%) sepia(20%);
            }
        }
        &:nth-last-child(1) {
            margin-right: 20px;
        }
    }

    @media (max-width: 768px) {
        ul {
            flex-flow: column nowrap;
            background-color: #00020b;
            position: absolute;
            top: 0;
            right: 0;
            height: 30vh;
            width: 150px;
            margin: 0px;
            border-radius: 5px;
            display: none;

            &:nth-last-child(1) {
                margin-right: 0px;
            }

            li {
                margin-top: 30px;
                border-bottom: 1px solid #fff;
            }
        }
    }

    @media (max-width: 338px) {
        h1 {
            font-size: 20px;
            margin-left: 5px;
        }
    }
`;

export const NavStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25px;
    right: 28px;
    display: none;

    div {
        width: 2rem;
        height: 0.2rem;
        background-color: #fff;
        margin-bottom: 6px;
    }

    @media (max-width: 768px) {
        display: inline;
        transition: all 2s linear;

        ul {
            flex-flow: column nowrap;
            background-color: #00020b;
            position: absolute;
            top: 0;
            right: 40px;
            height: 30vh;
            width: 150px;
            margin: 0px;
            border-radius: 5px;
            display: ${(props: { open: boolean }) =>
                props.open ? 'inline' : 'none'};
            &:nth-last-child(1) {
                margin-right: 0px;
            }

            li {
                margin-top: 30px;
                border-bottom: 1px solid #fff;
            }
        }
    }

    @media (max-width: 338px) {
        top: 15px;
        width: 1rem;
        height: 1rem;
    }
`;
