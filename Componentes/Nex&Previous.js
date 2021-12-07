import React from "react";


const Pagination = ({onPrev, onNext,next,prev})=>{
    const handelPrev=()=>{
        onPrev()
    }
    const handleNext=()=>{
        onNext()
    }
    return(
        <div id='nextyprev'>
            <div>
            {
                prev ?
                (<button onClick={handelPrev} id='prev'>prev</button>)
                :null
            }
            {
                next ?
                (<button onClick={handleNext}  id='next'>next</button>)
                :null

            }
            </div>
        </div>
    )
}
export default Pagination;