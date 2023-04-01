import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "../../components/layouts/Header"
import { HomeSection } from "../../components/screens/HomeSection"
import { NavigateButton } from "../../components/Buttons/NavigateButton"
import { CurrentPageContentContainer, PageContainer, PageContentWrapper, HomeSectionWrapper } from "./styled"
import { Footer } from "../../components/layouts/Footer"

export const Home = () => {
  const { pathname } = useLocation();
  const pageContainerRef = useRef();

  useEffect(() => {
    console.log(pageContainerRef.current)
    pageContainerRef.current?.childNodes.forEach((element) => {
      if ((pathname === '/' && element?.id === 'home') || pathname.includes(element?.id))
        element.scrollIntoView({ behavior: "smooth", block: "start"});
    })
  }, [ pathname ])

  return (
    <PageContainer>
      <div className='background-support'></div>
      <HomeSectionWrapper>
        <Header />
        <PageContentWrapper>
          <NavigateButton isPrevious />
          <NavigateButton />
          <CurrentPageContentContainer ref={pageContainerRef}>
            <HomeSection />
            <section id="about-me"></section>
            <section id="project"></section>
            <section id="contacts"></section>
          </CurrentPageContentContainer>
        </PageContentWrapper>
        <Footer />
      </HomeSectionWrapper>
    </PageContainer>
  )
}