import { Outlet } from 'react-router-dom';
import PageContent from '../PageContent';

function Page() {

    return (
        <section>
            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}
export default Page;