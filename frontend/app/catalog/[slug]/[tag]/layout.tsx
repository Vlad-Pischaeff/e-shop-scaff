export async function generateStaticParams(
    { params: { slug }, }:
    { params: { slug: string } }
) {
    const res = await fetch(`http://localhost:3001/sections?title=${slug}`)
    const [ sections ] = await res.json();

    return sections['submenu'].map((section: any) => ({
        tag: section.label,
    }));
}

export default function Layout(
    { children, }:
    { children: React.ReactNode }
) {

    return (
        <>
            { children }
        </>
    )
}
