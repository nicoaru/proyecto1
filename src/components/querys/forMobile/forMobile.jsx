import { useMediaQuery } from 'react-responsive'


function ForMobile({ children }) {
    const isMobile = useMediaQuery({ maxWidth: 991})
    return isMobile ? children : null
}

export { ForMobile }