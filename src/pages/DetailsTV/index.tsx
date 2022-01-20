import { useParams } from 'react-router-dom';

import { IParams } from '../../@types';
import Loading from '../../components/Loading';
import { useDetails } from '../../hooks/useDetailsFetch';
import DetailsTemplate from '../../templates/DetailsTemplate';

const DetailsTV: React.FC = () => {
    const { id }: IParams = useParams();
    const { loading, details, trailer, cast } = useDetails(id || '', false);

    if (loading) return <Loading />;

    return <DetailsTemplate data={details} trailer={trailer} cast={cast} />;
};

export default DetailsTV;
