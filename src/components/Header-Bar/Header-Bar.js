import React, { useContext, useEffect, useRef, useState } from 'react'
import './Header-Bar.css'
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';
import { ProductContext } from '../../Context/Product';
import { Avatar } from 'primereact/avatar';


export default function Header() {

    const menu = useRef(null);
    const [visible, setVisible] = useState(false);
    const navigator = useNavigate();
    const { carts, orders, token, setToken, user } = useContext(ProductContext);
    const [items, setItems] = useState([
        { label: 'Login', icon: 'pi pi-user-edit', command: () => navigator('/login') },
        { label: 'Register', icon: 'pi pi-user-plus', command: () => navigator('/signup') }
    ]);

    useEffect(() => {
        if (token) {
            setItems([
                {
                    label: 'User Settings',
                    items: [
                        { label: 'Profile', icon: 'pi pi-user', command: () => navigator('/profile') },
                        { label: 'Add Product', icon: 'pi pi-plus', command: () => navigator('/addproduct') },
                        { label: 'Product List', icon: 'pi pi-list', command: () => navigator('/productlist') },
                        { label: 'Log Out', icon: 'pi pi-sign-out', command: () => { localStorage.removeItem('safaToken'); setToken(undefined); document.location.reload() } },
                    ]
                },
                {
                    separator: true
                },
                {
                    command: () => navigator('/profile'),
                    template: () => {
                        return (
                            <div className="drop-down">
                                <Avatar label={user?.username?.split(' ').map(word => word.charAt(0)).join('')} style={{ backgroundColor: '#f1ad0f', color: '#ffffff' }} shape="circle" />
                                <div className="drop-down-avatar">
                                    <span className="name">{user?.username}</span>
                                </div>
                            </div>
                        );
                    }
                }
            ])
        }
    }, [token, navigator, setToken, user.username])

    return (
        <header>
            <div id="main" className="container_1">
                <div className="box_1">
                    <img src={'/assets/img/SAFA_Main_Logo.png'} alt="SAFA_Logo" onClick={() => navigator('/')} />
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <div className="search-icon">
                            <i className="pi pi-search"></i>
                        </div>
                    </div>
                </div>
                <div className="box_2">
                    <Menu model={items} popup ref={menu} />
                    <Tooltip target=".header-icons" />
                    {token && <i className="header-icons pi pi-heart p-overlay-badge" data-pr-tooltip="View Cart" onClick={() => navigator('/cart')}>
                        <Badge value={carts?.length}></Badge>
                    </i>}
                    {token && <i className="header-icons pi pi-shopping-bag p-overlay-badge" data-pr-tooltip="View Orders" onClick={() => navigator('/orders')}>
                        <Badge value={orders?.length}></Badge>
                    </i>}
                    <i className="header-icons pi pi-user p-overlay-badge" data-pr-tooltip="User Settings" onClick={(event) => menu.current.toggle(event)} ></i>
                    <i className="pi pi-bars" onClick={() => setVisible(true)}></i>
                </div>
            </div>
            <div className="container_2">
                <div className="container_3">
                    <div className="box_1">
                        <div className="router-links-container">
                            <NavLink activeclassname="active" to='/' >Home</NavLink>
                            <NavLink activeclassname="active" to='/contact' >Contact</NavLink>
                        </div>
                    </div>
                    <div className="box_2">Shop Till You Drop...</div>
                </div>
            </div>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h3 onClick={() => { navigator('/'); setVisible(false) }}>Home</h3>
                <h3 onClick={() => { navigator('/contact'); setVisible(false) }}>Contact</h3>
            </Sidebar>
        </header>
    )
}
