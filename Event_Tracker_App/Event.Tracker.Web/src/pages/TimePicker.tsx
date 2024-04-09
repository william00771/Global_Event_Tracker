import './TimePicker.css'

type Props = {
    className: string
}

export const TimePicker = ({ className }: Props) => {
    return(
        <section className={className}>
            <form className='form_container'>
                <button type='submit' className='btn-primary--gradient-outlinethin btn'>Confirm</button>
            </form>
        </section>
    )
}