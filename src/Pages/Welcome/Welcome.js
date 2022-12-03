import React, { useState } from 'react'
import WelcomeContent from '../../Components/Welcome/WelcomeContent'
import WelcomeHeader from '../../Components/Welcome/WelcomeHeader'

import './welcome.css'

const Welcome = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
return (
    <div className='welcome--page section__padding'>
        <WelcomeHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <WelcomeContent />
    </div>
  )
}

export default Welcome