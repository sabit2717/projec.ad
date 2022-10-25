import React from 'react'
import css from './Loader.module.css'
function Loader() {
  return (
    <div className={css.img}>
        <img src="https://flevix.com/wp-content/uploads/2019/07/Ball-Drop-Preloader-1-1.gif" alt="loader" />
    </div>
  )
}

export default Loader