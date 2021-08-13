import { DetailsStyle } from './styles';

const Details: React.FC = () => {
    return (
        <DetailsStyle>
            {/* <div className="banner"></div> */}

            <div>
                <img
                    src="https://image.tmdb.org/t/p/w185/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg"
                    alt=""
                />
                <div className="background-image" />

                <div>
                    <h2>The Suicide Squad</h2>

                    <p>
                        Supervillains Harley Quinn, Bloodsport, Peacemaker and a
                        collection of nutty cons at Belle Reve prison join the
                        super-secret, super-shady Task Force X as they are
                        dropped off at the remote, enemy-infused island of Corto
                        Maltese.
                    </p>

                    <span>
                        <i className="fas fa-star"></i> 8.1
                    </span>
                    <button>Watch Trailer</button>
                </div>
            </div>
        </DetailsStyle>
    );
};

export default Details;
