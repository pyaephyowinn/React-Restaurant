import { Link } from 'react-router-dom'

import classes from './index.module.css'

const NotFoundPage = () => {

  return (
    <div className={classes.container}>
      <section className={classes.content}>
        <h2>404</h2>
        <p>Sorry, we can't find the page! Don't worry though, everything is Still AWESOME</p>
        <Link className={classes.btn} to='/products'>Start shopping &gt;</Link>
      </section>
    </div>
  )
}

export default NotFoundPage