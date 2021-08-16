import React from 'react';
import './newsCard.css';

const NewsCard = () => {
    return ( 
        <div className="newscard">
            <div className="image">
                <img src="https://lbimg.in.com/LiveBlog/img/2021/08/42eedf573907af3c05d4f4bd17c0afe1.PNG" alt="headerimage" />
            </div>
            <div className="newsTitle">
                <h3>indipendanteday</h3>
            </div>
            <div className="newsdetail">
                <p>news text</p>
                <div className="readmore">
                    <button>Readmore</button>
                </div>
            </div>

        </div>
     );
}
 
export default NewsCard;