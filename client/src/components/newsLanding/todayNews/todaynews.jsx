import React from 'react';
import Add from './addvertize/add';
import SideNews from './miniinfo/sideNewsInfo';
import NewsCard from './newsCard/newsCard';
import './todaynews.css';

const TodayNews = () => {
    return (
        <div className="todaynews">
            <div className="sideNews">
                <SideNews/>
            </div>
            <div className="mainContent">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
            <div className="addbanner">
                <Add/>
            </div>
        </div>
      );
}
 
export default TodayNews;