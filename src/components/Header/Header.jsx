
import { useEffect, useRef, useState } from 'react'
import './Header.css'

const Header = () => {
  const [activePage, setActivePage] = useState('home')
  const navigationTarget = useRef(null)

  useEffect(() => {
    const sections = ['home', 'works', 'contact']

    // Update the URL without reloading or scrolling
    const updateURL = (id) => {
      const hash = `#${id}`

      if (window.location.hash !== hash) {
        window.history.replaceState(null, '', hash)
      }
    }

    // Detect the section currently being viewed
    const updateActivePage = () => {
      if (navigationTarget.current) return

      const headerHeight =
        document.querySelector('.site-header')?.offsetHeight ?? 0

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5

      // Contact is the final section
      if (atBottom && document.getElementById('contact')) {
        setActivePage('contact')
        updateURL('contact')
        return
      }

      let currentSection = 'home'

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= headerHeight + 40) {
            currentSection = id
          }
        }
      })

      setActivePage(currentSection)
      updateURL(currentSection)
    }

    // Detect clicks on all internal navigation links
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const targetId = link.getAttribute('href')?.slice(1)
      const target = document.getElementById(targetId)

      if (!target) return

      let activeSection = targetId

      // Design categories belong to Works
      if (
        targetId === 'graphic-design' ||
        targetId === 'ui-design'
      ) {
        activeSection = 'works'
      }

      if (!sections.includes(activeSection)) return

      navigationTarget.current = activeSection
      setActivePage(activeSection)
    }

    // Resume automatic detection after smooth scrolling
    const handleScrollEnd = () => {
      navigationTarget.current = null
      updateActivePage()
    }

    updateActivePage()

    window.addEventListener('scroll', updateActivePage, {
      passive: true,
    })

    window.addEventListener('resize', updateActivePage)
    window.addEventListener('scrollend', handleScrollEnd)
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('scroll', updateActivePage)
      window.removeEventListener('resize', updateActivePage)
      window.removeEventListener('scrollend', handleScrollEnd)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="header-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <a
          href="#home"
          className={activePage === 'home' ? 'active' : ''}
          aria-current={activePage === 'home' ? 'location' : undefined}
        >
          Home
        </a>

        <a
          href="#works"
          className={activePage === 'works' ? 'active' : ''}
          aria-current={activePage === 'works' ? 'location' : undefined}
        >
          Works
        </a>

        <a
          href="#contact"
          className={activePage === 'contact' ? 'active' : ''}
          aria-current={activePage === 'contact' ? 'location' : undefined}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
