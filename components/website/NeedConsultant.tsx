import Link from 'next/link';
import Image from 'next/image';
function NeedConsultant() {
    return (
        <>
            <div className="consultation">
                <Image src="/assets/img/services/service-details4.jpg" layout="fill" alt="Details" />
                <div className="inner">
                    <h3>Need Investment Consultation</h3>
                    <Link href="/pages/contacts">
                        <a className="common-btn">Send Message</a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NeedConsultant;
