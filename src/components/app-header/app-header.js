import './app-header.scss'

const AppHeader = () => {

    return (
        <header className='app__header'>
           <h1 className="app__title">
                <a href="marvel.com">Marvel</a> 
                information portal
           </h1>
           <nav className='app__menu'>
                <ul>
                    <li>Characters</li>
                    /
                    <li>Comics</li>
                </ul>
           </nav>
        </header>
    )

}

export default AppHeader 