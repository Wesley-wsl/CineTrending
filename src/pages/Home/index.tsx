import { HeroImage } from './style';

export default function Home() {
    return (
        <>
            <main>
                <HeroImage
                // image={`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&query=Jack+Reacher`}
                >
                    <div>
                        <h2>Nome do filme random</h2>
                        <p>Sinopse do filme random</p>
                        <p>Star - 7.0</p>
                    </div>
                </HeroImage>
            </main>
        </>
    );
}
