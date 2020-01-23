import React from 'react';
import SidebarSearch from './SidebarSearch';
import LatestPost from './LatestPost';
import SidebarCategory from './SidebarCategory';
import SidebarTags from './SidebarTags';

let LatestPostData = [
    {
        image: '../assets/images/lp-1-1.jpg',
        alt: 'Awesome Image',
        title: 'Basic rules of running web agency',
        link: '/blog/:number',
    },
    {
        image: '../assets/images/lp-1-1.jpg',
        alt: 'Awesome Image',
        title: 'Basic rules of running web agency',
        link: '/blog/:number',
    },
    {
        image: '../assets/images/lp-1-1.jpg',
        alt: 'Awesome Image',
        title: 'Basic rules of running web agency',
        link: '/blog/:number',
    }
]
let categoryList = [
    {
        link: '/blog/:number',
        label: 'Business',
    },
    {
        link: '/blog/:number',
        label: 'Introductions',
    },
    {
        link: '/blog/:number',
        label: 'One Page Template',
    },
    {
        link: '/blog/:number',
        label: 'Parallax Effects',
    },
    {
        link: '/blog/:number',
        label: 'New Technologies',
    },
    {
        link: '/blog/:number',
        label: 'Video Backgrounds',
    }
]

let tagsList = [
    {
        label: 'Business',
        link: '/blog/:number',
    },
    {
        label: 'Agency',
        link: '/blog/:number',
    },
    {
        label: 'Technology',
        link: '/blog/:number',
    },
    {
        label: 'Parallax',
        link: '/blog/:number',
    },
    {
        label: 'Innovative',
        link: '/blog/:number',
    },
    {
        label: 'Professional',
        link: '/blog/:number',
    },
    {
        label: 'Experience',
        link: '/blog/:number',
    },
]

const Sidebar = (props) => {
    return(
        <div className="sidebar">
                <SidebarSearch/>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Latest Posts</h3>{/* /.sidebar__title */}
                  <div className="sidebar__post-wrap">
                    {
                        LatestPostData.map((val,i)=> {
                            return(
                                <LatestPost key={i}
                                    image={val.image}
                                    alt={val.alt}
                                    title={val.title}
                                    link={val.link}
                                />
                            )
                        })
                    }
                  </div>{/* /.sidebar__post-wrap */}
                </div>{/* /.sidebar__single */}
                    
                {/*  */}
                    <SidebarCategory title='Categories' categoryList={categoryList} />
                {/*  */}

                {/*  */}
                    <SidebarTags title='Tags' tagsList={tagsList}/>
                {/*  */}

              </div>
    )
}

export default Sidebar