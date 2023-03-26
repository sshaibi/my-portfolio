import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi"
import { NavigateButtonWrapper } from "./styled"
import { IconContext } from "react-icons"
import { redirect, useLocation, useNavigate } from "react-router-dom"

export const NavigateButton = ({ isPrevious = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let isDisabled = ((isPrevious && pathname === '/') || (!isPrevious && pathname === '/contacts'));

  const paths = ['/', '/about-me', '/projects', '/contacts']

  return (
    <NavigateButtonWrapper 
      className={`${isPrevious ? 'previous' : 'next'}`} 
      disabled={isDisabled}
      onClick={e => {
        let redirectTo = paths.indexOf(pathname) + (isPrevious ? -1 : +1);
        navigate(paths.at(redirectTo))
      }}
    >
      <IconContext.Provider value={{
        size: '24px'
      }}>
        {
          isPrevious ? (
            <HiOutlineArrowNarrowLeft />
          ) : (
            <HiOutlineArrowNarrowRight />
          )
        }
      </IconContext.Provider>
    </NavigateButtonWrapper>
  )
}