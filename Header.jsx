import chefLogo from "../image/chefIcon.png"
export default function Header(props) {
    console.log(props)
    return (
        <header>
            <img src={chefLogo} alt="Chef Icon"></img>
            <p>Chef Claude</p>
        </header>
    )
}