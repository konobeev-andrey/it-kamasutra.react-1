import React from "react";
import style from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p && style.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })
            }
        </div>
}

export default Paginator;