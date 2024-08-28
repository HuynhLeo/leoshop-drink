import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/banner.css";
import img1 from '../images/bn1.jpg'
import img2 from '../images/bn2.jpg'
import img3 from '../images/bn3.jpg'
import img4 from '../images/bn4.jpg'

const data = [
   img1,img2,img3,img4
];

// console.log(data);

const Banner = () => {
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }
            </Carousel>
        </>
    )
}

export default Banner;
