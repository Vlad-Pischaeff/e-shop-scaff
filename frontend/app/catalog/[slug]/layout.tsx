export async function generateStaticParams() {
    const res = await fetch(`http://localhost:3001/sections`);
    const sections = await res.json();

    return sections.map((section: any) => ({
        slug: section.title,
    }));
}

export default function Layout(
    { children, params }:
    { children: React.ReactNode, params: { slug: string} }
) {

    return (
        <>
            { children }
        </>
    )
}
