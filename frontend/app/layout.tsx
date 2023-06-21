import '@/styles/globals.sass';
import { MainFooter } from '@/components/MainFooter';
import { MainHeader } from '@/components/MainHeader';
import { MainLogo } from '@/components/MainLogo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Next App Shop',
    description: 'Test next app shop',
}

export default function RootLayout(
    { children, }:
    { children: React.ReactNode }
) {
    return (
        <html lang="en">
            <body>
                <MainLogo />
                <MainHeader />
                <Breadcrumbs />
                {children}
                <MainFooter />
            </body>
        </html>
    )
}
