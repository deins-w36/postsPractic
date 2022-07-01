import { useState } from 'react'

import './header.scss'

const Header = (props) => {
    const [active, setActive] = useState(false)

    const onChangeMenu = (e) => {
        props.onUpdateMenu(e.currentTarget.getAttribute('data-menu'))
    }

    const clazz = active ? 'header__burger-act active' : 'header__burger-act'

    return (
        <header className="header">
            <div className="header__name">Placeholder - Posts</div>
            <div onClick={() => setActive((menu) => !menu)} className="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={clazz}>
                <div onClick={onChangeMenu} className="header__burger-act__item" data-menu="posts">
                    Posts
                </div>
                <div onClick={onChangeMenu} className="header__burger-act__item" data-menu="users">
                    Users
                </div>
            </div>
        </header>
    )
}

export default Header
