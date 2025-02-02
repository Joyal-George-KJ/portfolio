import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Effects() {
  const ref = useRef(null);
  const theme = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    if (theme) {
      ref.current.classList.add('dark');
      ref.current.classList.remove('light');
    } else {
      ref.current.classList.add('light');
      ref.current.classList.remove('dark');
    }
  }, [theme])
  
  return (
    <div ref={ref} className='effects fixed top-0 left-0 right-0 bottom-0 pointer-events-none'>

    </div>
  )
}

export default Effects