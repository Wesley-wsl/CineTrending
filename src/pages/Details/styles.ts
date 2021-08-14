import styled from 'styled-components';

export const DetailsStyle = styled.section`
    max-width: 70%;
    height: 400px;
    margin: 50px auto;
    /* background-color: #000000; */
    position: relative;
    padding: 20px;

    div {
        display: flex;
        justify-content: space-between;
        float: left;
        align-items: center;
        height: 100%;
        margin: 0 auto;

        img {
            align-items: center;
            margin-right: 7%;
            margin-left: 20px;
            filter: brightness(90%) grayscale(90%);
            border-radius: 10px;
        }

        div {
            float: right;
            flex-direction: column;
            height: 95%;

            p {
                max-width: 600px;
                color: #e9ecef;
                span {
                    color: #adb5bd;
                }
            }

            button {
                padding: 10px;
                background-color: #000735;
                border-radius: 10px;
                color: #fff;
                border: none;
                cursor: pointer;
                transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
                &:hover {
                    background-color: #000949;
                    transform: scale(120%);
                }
            }
        }
    }

    @media (max-width: 980px) {
        display: flex;

        div {
            .poster {
                display: none;
            }
        }
    }

    @media (max-width: 700px) {
        margin: 0;
        max-width: 100%;
        height: 470px;

        div {
            margin-right: 0px;

            div {
                p {
                    margin-top: 10px;
                }
            }
        }
    }

    @media (max-width: 380px) {
        height: 600px;
    }
`;

// interface BackgroundProps {
//     BackgroundPath: string;
// }

export const BackgroundImage = styled.div`
    .background {
        filter: saturate(120%) sepia(80%) brightness(20%);
        width: 100%;
        height: 100%;
        border-radius: 10px;
        margin: 0 auto;
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
    }
`;
