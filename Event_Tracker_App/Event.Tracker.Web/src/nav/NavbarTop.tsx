import { useRef, useState } from 'react'
import './NavbarTop.css'

type Props = {
    page: string,
    className: string,
    setPage: (page: string) => void,    
    setFilter: (filter: string) => void
}

export const NavbarTop = ({ className, page, setPage, setFilter }: Props) => {
    const [active, setActive] = useState(false);

    const setPageHandler = () => {
        if(page == 'TimePicker'){
            setPage('Explore');
        }
        else{
            setPage('TimePicker');
        }
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (): void => {
        active ? '' : setActive(true);
    }

    const searchHandler = (e: React.MouseEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        active == true ? '' : setActive(!active);
    }

    const submitHandler = (): void => {
        if (inputRef.current) {
            if(inputRef.current.value === ''){
                setFilter(" ");
                setActive(false);
                return;
            }
            setFilter(inputRef.current.value.toString());
            inputRef.current.blur();
            setActive(false)
        }
    }

    return (
      <nav className={className}>
        <a
          onClick={() => setPageHandler()}
          className={"navtop__item "}
          href="#"
        >
          <svg
            className={
              "navtop-icon timepicker-icon navtop-icon--colorfill " +
              (page == "TimePicker" && "active")
            }
            fill="#000000"
            viewBox="0 0 24 24"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.707,16.325a1,1,0,0,0-1.414,0l-5.627,5.628L13.978,19.3A1,1,0,0,0,12.543,20.7L15.287,23.4a1.876,1.876,0,0,0,1.345.6h.033A1.873,1.873,0,0,0,18,23.447l5.707-5.708a1,1,0,0,0,0-1.414Z M11.09,21.959A10,10,0,1,1,22,12c0,.307-.015.611-.041.911A1,1,0,0,0,22.866,14a.989.989,0,0,0,1.085-.907C23.983,12.73,24,12.367,24,12A12,12,0,1,0,10.91,23.951c.031,0,.061,0,.091,0a1,1,0,0,0,.089-2Z M11,7v4.586L8.293,14.293a1,1,0,1,0,1.414,1.414l3-3A1,1,0,0,0,13,12V7a1,1,0,0,0-2,0Z" />
          </svg>
          <p
            className={
              "navtop__title timepicker-title " +
              (page == "TimePicker" && "active")
            }
          >
            Time
          </p>
        </a>
        <form onSubmit={submitHandler} className="form__container">
          <input
            className={"form__input " + (active ? "active" : "inactive")}
            ref={inputRef}
            onChange={changeHandler}
            onSubmit={submitHandler}
            onClick={searchHandler}
            name="filter"
            type="text"
            placeholder="Search Events"
          />
          <button
            className={"form__input--button " + (active ? "active" : "inactive")}
            onClick={() => submitHandler()}
          >
            Confirm
          </button>
        </form>
        <a
          onClick={() => setPage("Account")}
          style={{
            opacity: active ? "0" : "1",
            transform: active ? "translateX(300%)" : "translateX(0%)",
            filter: active ? "blur(4px)" : "blur(0px)",
            transition: "all 0.3s ease-in-out",
          }}
          className={"navtop__item " + (page == "Account" ? " inactive " : " active ")} href="#"
        >
          <svg
            className={
              "navtop-icon account-icon " +
              (page == "Account" && "active ") +
              (active && "inactive")
            }
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path
              className={"navtop-icon--colorfill "} opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"
            />
            <path
              className={"navtop-icon--colorfill "} d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#1C274C"
            />
            <path
              className={"navtop-icon--colorfill "} d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#1C274C"
            />
          </svg>
          <p
            className={
              "navtop__title account-title " + (page == "Account" && " active ")
            }
          >
            Account
          </p>
        </a>
      </nav>
    );
}