import './TimePicker.css'

type Props = {
    className: string
}

export const TimePicker = ({ className }: Props) => {
    return(
        <section className={className}>
            <h1>TimePicker</h1>
        </section>
    )
}