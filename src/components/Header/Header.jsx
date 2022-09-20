import {Fragment} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import classes from './Header.module.css';

const Header = (props) => {
  // const introImage = {
  //   backgroundImage: 'url('image')',
  // };
  return (
    <Fragment>
      <div id="home" className={`${classes.intro} ${classes.route} ${classes["bg-image"]}`}>
          <div className={classes["overlay-itro"]}></div>
              <div className={`${classes["intro-content"]} ${classes["display-table"]}`}>
                  <div className={classes["table-cell"]}>
                      <div className={classes.container}>
                      
                        <h1 className={`${classes["intro-title"]} ${classes.mb-4}`} >I am David Alasthan Freeman</h1>
                        <p className={classes["intro-subtitle"]}>
                        <span >
                        <Typewriter
                            words={['CEO DevFolio', 'Web Developer', 'Backend Developer', 'Frontend Developer']}
                            loop={''}
                            cursor
                            cursorStyle='_'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                          {/* CEO DevFolio,Web Developer,Frontend Developer,Graphic Designer */}
                        </span>
                        <strong className="text-slider"></strong></p>
                        <p className="pt-3">
                          <a href="#about" role="button">Learn More</a>  
                      </p> 
                      </div>
                  </div>
              </div>
      </div>
    </Fragment>
  )
}

export default Header