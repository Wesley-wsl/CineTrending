import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import { api, keyApi } from '../../services/api';
import DetailsTemplate from '../../templates/DetailsTemplate';

type Params = {
    id?: string | number;
    idTv?: string | number;
};

const DetailsTV: React.FC = () => {
    const { id }: Params = useParams();
    const [data, setData] = useState(Object);
    const [trailer, setTrailer] = useState(Object);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function getInfo() {
        await api
            .get(`tv/${id}?api_key=${keyApi}&language=en-US`)
            .then(res => setData(res.data));
    }

    async function getTrailer() {
        await api
            .get(`tv/${id}/videos?api_key=${keyApi}&language=en-US`)
            .then(res => setTrailer(res.data.results[0].key));
    }

    useEffect(() => {
        Promise.all([getInfo(), getTrailer()])
            .then(() => setTimeout(() => setLoading(false), 400))
            .catch(() => navigate('/'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <Loading />;

    return <DetailsTemplate data={data} trailer={trailer} />;
};

export default DetailsTV;
