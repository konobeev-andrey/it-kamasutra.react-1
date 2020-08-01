import React, {useState} from "react";
import style from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1
            ? <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
            :<div></div>
        }
            {pages
                .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => {
                return <span key={p} className={currentPage === p && style.selectedPage}
                             onClick={() => {
                                 onPageChanged(p)
                             }}
                >{p}</span>

            })
            }
        {portionCount > portionNumber
            ? <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>
            :<div></div>
        }
        </div>
}

export default Paginator;