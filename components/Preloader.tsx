interface props {
    show: Boolean;
}

function Preloader({ show }: props) {
    return (
        <>
            {show ? (
                <div className="">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="spinner">
                                <div className="double-bounce1" />
                                <div className="double-bounce2" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default Preloader;
