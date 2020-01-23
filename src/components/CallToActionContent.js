import React, {Component} from 'react';

export const CtaOneBannerImage = [
    {
        bannerImage: './assets/images/banner-icon-1-6.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-1',
    },
    {
        bannerImage: './assets/images/banner-icon-1-4.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-2',
    },
    {
        bannerImage: './assets/images/banner-icon-1-5.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-3',
    },
]
export const CtaOneList = [
    {
        listIcon: 'fa fa-check',
        listContent: 'Refresing to get such a personal touch. '
    },
    {
        listIcon: 'fa fa-check',
        listContent: 'Duis aute irure dolor in reprehenderit in voluptate. '
    },
    {
        listIcon: 'fa fa-check',
        listContent: 'Velit esse cillum dolore eu fugiat nulla pariatur.'
    },
]
export const CtaOneParagraph = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
export const CtaTwoBannerImage = [
    {
        bannerImage: './assets/images/banner-icon-1-2.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-1',
    },
    {
        bannerImage: './assets/images/banner-icon-1-6.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-2',
    },
    {
        bannerImage: './assets/images/banner-icon-1-3.png',
        imageAlt:'Awesome Image',
        imageClass: 'bubble-3',
    },
    {
        bannerImage: './assets/images/cta-moc-1-2.png',
        imageAlt:'Awesome Image',
        imageClass: 'cta-two__moc',
    },
]
export const CtaTwoParagraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`;

export const CtaThreeImages = {
    imageOne: 
        {
            image: './assets/images/cta-1-1.png',
            alt: 'Awesome Image',
        }
    ,
    imageTwo: 
        {
            image: './assets/images/cta-1-2.png',
            alt: 'Awesome Image',
        }
    
}
export const CtaTwoFeature = [
    {
        featureIcon: 'nonid-icon-strategy',
        featureTitle: 'Business Strategy'
    },
    {
        featureIcon: 'nonid-icon-presentation',
        featureTitle: 'Online Marketing'
    },
    {
        featureIcon: 'nonid-icon-human-resources',
        featureTitle: 'Consumer Products'
    },
]
export const CtaThreeParagraph = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

export const CtaThreeImage = function(props){
    const {image,alt} = props
    return(
        <div className="cta-one__image">
            <img src={image} alt={alt} />
        </div>
    )
}
