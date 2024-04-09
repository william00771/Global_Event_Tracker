import './SavedEvents.css'

type Props = {
    className: string
}

export const SavedEvents = ({ className }: Props) => {
    return(
        <section className={className}>
            <h1>SavedEvents</h1>
        </section>
    )
}