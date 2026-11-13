
import './Home.css'

import canva from '../../assets/canva.svg'
import figma from '../../assets/figma.svg'
import photoshop from '../../assets/photoshop.svg'
import premiere from '../../assets/premiere.svg'

const tools = [
  { name: 'Figma', src: figma },
  { name: 'Canva', src: canva },
  { name: 'Photoshop', src: photoshop },
  { name: 'Premiere Pro', src: premiere },
]

const FolderLink = ({ href, children }) => (
  <a className="folder-link" href={href}>
    <svg
      viewBox="0 0 160 120"
      aria-hidden="true"
      focusable="false"
      shapeRendering="crispEdges"
    >
      {/* Back of folder */}
      <path
        d="M8 108V12H60V20H130V108Z"
        fill="#ffac20"
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Front of folder */}
      <path
        d="M8 108V84H16V60H24V44H32V36H150V52H142V76H134V108Z"
        fill="#ffac20"
        stroke="currentColor"
        strokeWidth="5"
      />
    </svg>

    <span>{children}</span>
  </a>
)

const Home = () => {
  return (
    <div id="home">
      <section className="section home">
        <div className="home-content">
          <h1>
            Hello, I'm <span className="home-name">Drea!</span>
          </h1>

          <p className="home-intro">
            Graphic and UI Designer creating visually appealing content
            that connects and aligns with the brand.
          </p>

          <a
            className="resume-button"
            href="https://drive.google.com/file/d/1O1yQN9FbeZykJGQOefEwjCPUbtV5CgOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M14 3H5v18h9M14 3v6h6M14 3l6 6v5" />
              <circle cx="17" cy="18" r="3" />
              <path d="m19.2 20.2 2.3 2.3" />
            </svg>
            View Resume
          </a>

          <div className="home-skills-row">
            <span className="row-label">Skills:</span>

            <ul className="home-skills">
              <li>
                <a href="#graphic-design">
                  Graphic Design <span aria-hidden="true">↓</span>
                </a>
              </li>
              <li>
                <a href="#ui-design">
                  UI Design <span aria-hidden="true">↓</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="home-tools-row">
            <span className="row-label">Tools I Use:</span>

            <ul className="home-tools">
              {tools.map(tool => (
                <li key={tool.name}>
                  <img
                    src={tool.src}
                    alt={tool.name}
                    title={tool.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="home-folders">
          <FolderLink href="#works">Works</FolderLink>
          <FolderLink href="#contact">Contact</FolderLink>
        </div>
        <a href="#works" className="scroll-cue">Scroll to view my works
          <span aria-hidden="true">↓</span>
        </a>
      </section>
    </div>
  )
}

export default Home
