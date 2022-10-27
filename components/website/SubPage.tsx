import Link from "next/link";
interface pageProps {
  title: string;
  menutitle: string;
}
function SubPage({ title, menutitle }: pageProps) {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-content">
                <h2>{title}</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <span> {menutitle}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubPage;
