import s from './page.module.sass';

type Props = {
    params: {
        id: string
    }
}

export default function Product(props: Props) {
    const { id } = props.params;

    return (
        <main className={s.main}>
            <div>
                <h2>product {id} page</h2>
            </div>
        </main>
    )
}
