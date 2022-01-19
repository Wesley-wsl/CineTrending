import { PulseLoader } from 'react-spinners';

import * as S from './styles';

export default function Loading() {
    return (
        <S.Container>
            <PulseLoader color={'#ffffff'} loading={true} size={20} />
        </S.Container>
    );
}
