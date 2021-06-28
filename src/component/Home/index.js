import React, {useState, useEffect} from 'react';
import Products from '../Products';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
    const [product, setProduct] = useState({});
    const redirectHome = useSelector(state => state.prodReducer.redirectHome);

    const dispatch = useDispatch();

    useEffect(() => {
        if(redirectHome)
        {
            dispatch({type: "CHANGE_REDIRECT"})
        }
    }, [redirectHome])

    return ( 
        <>
           <section id="banner" className="slick-initialized slick-slider slick-dotted">
                <div className="slick-list draggable">
                <div className="slick-track" style={{opacity: "1", width: "15993px", transform: "translate3d(-7108px, 0px, 0px)"}}>
                        <img src="https://shoplane.netlify.app/img/img4.png" alt="Image 4" className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img1.png" alt="Image 1" className="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img2.png" alt="Image 2" className="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img3.png" alt="Image 3" className="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img4.png" alt="Image 4" className="slick-slide slick-current slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img1.png" alt="Image 1" className="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img2.png" alt="Image 2" className="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img3.png" alt="Image 3" className="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{width: "1777px"}}/>
                        <img src="https://shoplane.netlify.app/img/img4.png" alt="Image 4" className="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" style={{width: "1777px"}}/>
                        </div>
                    </div>
                
                
            </section>

            <Products />
        </>
     );
}
 
export default Home;