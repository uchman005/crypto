import React from 'react';
import DotLoader from 'react-spinners/PulseLoader';
interface workingProps {
    loading?: boolean;
    size?: number;
}

export default function Busy({ loading, size = 25 }: workingProps) {
    return (
        <>
            <DotLoader color="#ffffff" loading={loading} size={size} />
        </>
    );
}
