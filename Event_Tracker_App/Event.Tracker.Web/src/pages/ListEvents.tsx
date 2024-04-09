import './ListEvents.css'

type Props = {
    className: string
}

export const ListEvents = ({ className }: Props) => {
    return(
        <section className={className}>
            <h1>ListEvents</h1>
        </section>
    )
}