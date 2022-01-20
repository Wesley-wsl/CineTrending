import { useParams } from 'react-router-dom';

import { IParams } from '../../@types';
import Loading from '../../components/Loading';
import { useDetails } from '../../hooks/useDetailsFetch';
import DetailsTemplate from '../../templates/DetailsTemplate';

const Details: React.FC = () => {
    const { id }: IParams = useParams();
    const { loading, trailer, details, cast } = useDetails(id || '', true);

    if (loading) return <Loading />;

    return <DetailsTemplate data={details} trailer={trailer} cast={cast} />;
};

export default Details;
