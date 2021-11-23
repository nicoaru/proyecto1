import { useMediaQuery } from 'react-responsive'


function ForDesktop({ children }) {
    const isDesktop = useMediaQuery({ minWidth: 992})
    return isDesktop ? children : null
}

export { ForDesktop }