import React from 'react'
import A from './PropDrlling/A'
import ChildA from './usecontext/ChildA'

function MainContext() {
  return (
    <div>

    {/* Props Drlling 
    A - B - C - D  */}
    {/* <A /> */}


    {/* usecontext
    
        1) create context 
        2) provider 
        3) useContext
    */}

    <ChildA />

    </div>
  )
}

export default MainContext