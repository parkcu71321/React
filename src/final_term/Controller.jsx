import React, { useState } from 'react';
import Main from './main';
import Hip from './hip';
import Cozy from './cozy';

function App() {
    const [page, setPage] = useState('main');

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    return (
        <div>
            {page === 'main' && <Main onPageChange={handlePageChange} />
            }

            {page === 'hip' && <Hip onPageChange={handlePageChange} />
            }

            {page === 'cozy' && <Cozy onPageChange={handlePageChange} />
            }
        </div>
    );
}

export default App;