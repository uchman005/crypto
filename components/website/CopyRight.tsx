import Link from "next/link";

function CopyRight() {
    return (
        <>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>
                            Copyright ©2021 Finon. Designed By TechNumbers Inc.
                            <Link href="/">SHQ Bitcoin Investors Inc.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CopyRight;
