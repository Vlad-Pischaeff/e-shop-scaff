import Image from 'next/image';
import s from './page.module.sass';
import { Navigation } from './navigation';

async function getSections() {
    const response = await fetch('http://localhost:3001/sections',
        { next: { revalidate: 10 } }
    );

    if (!response.ok) throw new Error('unable to fetch sections...');

    return response.json();
}

export default async function Home() {
    const sections = await getSections();

    return (
        <main className={s.main}>
            <div className={s.layout}>

                <Navigation sections={sections} />

                <div className={s.center}>
                    <Image src='/images/frontpage.jpg' width={800} height={600} alt='frontpage' />
                </div>

            </div>
        </main>
    )
}
