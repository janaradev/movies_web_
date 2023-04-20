import React, {useState, useEffect} from 'react';

const Paginate = () => {
    const [paginate,setPaginate] = useState([])
    const arr = [1,2,3,4,5,6,7,8,9,0]
    console.log(arr)
    return (
        <div id="paginate">
            <div className="container">
                <div className="paginate">
                    <h1>{paginate}</h1>
                    <button
                        onClick={()=>setPaginate(paginate + 1)}
                            style={{
                        width:"80px",
                        height:"40px",
                        background:"blue",
                        borderRadius:"10px",
                        cursor:"pointer",

                    }}>ADD</button>
                </div>
            </div>

        </div>
    );
};

export default Paginate;