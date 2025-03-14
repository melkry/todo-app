import './Header.scss';
import { FaTasks } from 'react-icons/fa';
import MainMenu from '../MainMenu/MainMenu';

export default function Header() {
    return (
        <>
            <header>
                <div className='title'><FaTasks /> Todo App</div>
                <div className='author'>by Melissa</div>
            </header>
            <MainMenu />
        </>
    );
}