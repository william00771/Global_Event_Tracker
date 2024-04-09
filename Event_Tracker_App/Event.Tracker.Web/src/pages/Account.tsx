import './Account.css'

type Props = {
    className: string
}

export const Account = ({ className }: Props) => {
    return(
        <section className={className}>
            <h1>Account</h1>
        </section>
    )
}