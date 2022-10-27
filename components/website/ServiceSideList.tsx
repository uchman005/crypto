import Link from 'next/link';
function ServiceSideList() {
    return (
        <>
            <div className="widget-area">
                <div className="services widget-item">
                    <h3>SHQ BTCI Services</h3>
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    Cash Investment
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Personal Insurance
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Education Loan
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    Financial Planning
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ServiceSideList;
