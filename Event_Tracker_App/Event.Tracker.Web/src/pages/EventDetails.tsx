import './EventDetails.css'

type Props = {
    className: string
}

export const EventDetails = ({ className }: Props) => {
    return(
        <section className={className}>
            <h1>EventDetails</h1>
        </section>
    )
}