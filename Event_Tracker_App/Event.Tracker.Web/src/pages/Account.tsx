import './Account.css'

type Props = {
    className: string,
    setPage: (page: string) => void
}

export const Account = ({ className, setPage }: Props) => {
    return(
        <section className={className}>
            <header className='loginpage-container__header'>
                <section className='loginpage-container__header-top'>
                    <a onClick={() => setPage('Explore')} className='loginpage-container__header-item' href="#">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
                            <path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
                            </g>
                        </svg>
                    </a>
                </section>
                <section className='loginpage-container__header-bottom'>
                <h1 className='loginpage-container__header-title'>Account Login</h1>
                </section>
                <img className='loginpage-container__header-bgimage' src="https://i.pinimg.com/564x/91/ef/f3/91eff36aa5b830a0e83cce8535133f43.jpg" alt="" />
            </header>
            <section className='loginpage-container__main'>
                <form className='loginpage-container__form' action="">
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='name' placeholder='Email'/>
                    <input className='input-primary--outline-gradient1 form-input' type="text" name='location' placeholder='Password'/>
                    <button className='btn-primary--gradient-outline form-input__buttonlogin' name='login'>Login</button>
                    <button className='btn-primary--naked'>Forgot Password</button>
                    <label className='loginpage-container__form-label' htmlFor="signup">Don't have an account?</label>
                    <button className='btn-primary--gradient form-input__buttonlogin' name='signup'>Sign Up Now</button>
                </form>
            </section>
        </section>
    )
}