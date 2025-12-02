import React, { useState } from 'react';
import Main from './main';
import Hip from './hip';
import Cozy from './cozy';

function Controller() {
    const [page, setPage] = useState('main');

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    return (
        <div>
            {page === 'main' && <Main onPageChange={handlePageChange} />}
            {/*&& 연산자는 앞 조건이 참이면 뒤 조건이 실행됨*/}

            {page === 'hip' && <Hip onPageChange={handlePageChange} />}

            {page === 'cozy' && <Cozy onPageChange={handlePageChange} />}
        </div>
    );
}

export default Controller;

