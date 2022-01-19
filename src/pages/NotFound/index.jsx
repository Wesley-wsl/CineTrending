import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';

export default function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 500);
    });

    return <Loading />;
}
