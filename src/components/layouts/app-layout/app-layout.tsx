
import { AppHeaderDashBoard } from './components/header/header-dashboard';
import { AppFooterDashBoard } from './components/footer/footer-dashboard';
/**
 * AppLayout component, layout for all app routes
 * @param {React.ReactNode} children
 * @returns{JSX.Element}
 */
export const AppLayout = ({children}: {children: React.ReactNode }) => {
    // const { components } = useBreadcrumb();
    return (
        <div className="relative flex min-h-screen flex-col">
            <AppHeaderDashBoard />
            <main className="flex-1 pt-[135px]">{children}</main>
            <AppFooterDashBoard/>
        </div>
    );
};
