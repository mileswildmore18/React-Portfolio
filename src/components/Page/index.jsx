import { Outlet } from 'react-router-dom';
import PageContent from '../PageContent';

function Page() {
// Provides the properties from the Page Content page for each page on the portfolio
    return (
        <section>
            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}
export default Page;