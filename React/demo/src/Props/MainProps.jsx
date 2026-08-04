/*
    Props : it's simple property. ()parameter 
    1) only read 
    2) we not change update 
    3) reuse 
    3) Props : one component to anthor data pass 
    4) 1) class 
        2) function 


*/

import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>
            <div className="container">
                <h1>hello this Class props</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 1" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 1" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" />
                    <ClassProps title="car 2" desc="car hello imges dta" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                </div>
            </div>
            <div className="container">
                <h1>helli this Function props</h1>
                <div className="row">
                    <FuncProps title="car dat" desc="sdfkusdagf kuasghduk" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                    <FuncProps title="casd sd" desc="sad sahgh" img="https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg" />
                    <FuncProps title="car dat" desc="sdfkusdagf kuasghduk" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                    <FuncProps title="casd sd" desc="sad sahgh" img="https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg" />
                    <FuncProps title="car dat" desc="sdfkusdagf kuasghduk" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                    <FuncProps title="casd sd" desc="sad sahgh" img="https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg" />
                    <FuncProps title="car dat" desc="sdfkusdagf kuasghduk" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                    <FuncProps title="casd sd" desc="sad sahgh" img="https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg" />
                    <FuncProps title="car dat" desc="sdfkusdagf kuasghduk" img="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg" />
                    <FuncProps title="casd sd" desc="sad sahgh" img="https://cdn.pixabay.com/photo/2022/08/28/19/39/steering-wheel-7417390_1280.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainProps