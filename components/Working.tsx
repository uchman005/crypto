import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
interface workingProps {
    loading?: boolean;
}

export default function Working({ loading }: workingProps) {
    return (
        <>
            <PropagateLoader color="#011a41" loading={loading} size={25} />
        </>
    );
}
