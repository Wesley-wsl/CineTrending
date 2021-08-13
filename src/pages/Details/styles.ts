import styled from 'styled-components';

export const DetailsStyle = styled.section`
    max-width: 70%;
    height: 400px;
    margin: 50px auto;
    /* background-color: #000000; */
    position: relative;
    padding: 20px;

    .background-image {
        background-image: url('https://image.tmdb.org/t/p/w1280/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg');
        background-position: center;
        filter: saturate(20%) sepia(30%) brightness(20%);
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        z-index: -1;
    }

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
            height: 70%;

            p {
                max-width: 600px;
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
`;
