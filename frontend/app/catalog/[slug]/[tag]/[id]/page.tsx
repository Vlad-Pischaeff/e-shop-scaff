import s from './page.module.sass';

type Props = {
    params: {
        id: string
    }
}

export default function Product(props: Props) {
    const { id } = props.params;

    console.log('\x1b[38;5;47;48;5;35m✅ page > [id]...\x1b[0m', props.params, props)

    return (
        <main className={s.main}>
            <div>
                <h2>product {decodeURIComponent(id)} page</h2>
            </div>
        </main>
    )
}
