
import './Works.css'

import holiday from '../../assets/gd-img/holiday-post.webp'
import halloween from '../../assets/gd-img/halloween-post.webp'
import collab from '../../assets/gd-img/andrews-assist.webp'
import product from '../../assets/gd-img/productpost.webp'
import flyer from '../../assets/gd-img/flyer.webp'
import merch from '../../assets/gd-img/merch.webp'
import vindee from '../../assets/ui-img/vindee.webp'


const socialPosts = [
  { src: holiday, alt: 'Holiday post' },
  { src: halloween, alt: 'Halloween post' },
  { src: collab, alt: "Andrew's Assist post" },
  { src: product, alt: 'Product announcement post' },
]

const Works = () => {
  return (
    <section id="works" className="section works">
      <div id="graphic-design" className="work-category">
        <h2>01 - Graphic Design</h2>

        <div className="gd-layout">
          <div className="gd-grid-1">
            {socialPosts.map(post => (
              <figure className="gd-item" key={post.src}>
                <img src={post.src} alt={post.alt} />
              </figure>
            ))}
          </div>

          <div className="gd-grid-2">
            <figure className="gd-item">
              <img src={merch} alt="Merch design" />
            </figure>

            <figure className="gd-item">
              <img src={flyer} alt="Tailgate flyer" />
            </figure>
          </div>
        </div>
      </div>

      <div id="ui-design" className="work-category">
        <h2>02 - UI Design</h2>
        <div className="ui-layout">
          <img src={vindee} alt="Vindee UI" />
        </div>

      </div>
    </section>
  )
}

export default Works
