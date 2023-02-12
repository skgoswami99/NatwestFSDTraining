import React from 'react';

const Pagination =(props:any) => {
    const pageNumbers=[];

    for(let i=0; i<= Math.ceil(props.totalPosts/props.postPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                <a onClick={()=>props.pagination(number)} href='#' className='page-link'>
                {number}
                </a></li>
            ))}
</ul></nav>
            )
}

export default Pagination;