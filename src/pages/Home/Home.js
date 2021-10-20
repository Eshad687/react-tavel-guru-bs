import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.css'

import SwiperCore, {
    Pagination
} from 'swiper';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useDestinations from '../../hooks/useDestinations';
import { useHistory } from 'react-router';

// install Swiper modules
SwiperCore.use([Pagination]);


const Home = () => {



    const [id, setId] = useState(0)




    const { destinations,
        bannerImg,
        banner,
        name,
        descrip,
        setBanner,
        setName,
        setDescrip } = useDestinations();



    const handleDestination = (destination) => {
        const destinationPlace = destinations?.find(dest => dest.place === destination);

        bannerImg.backgroundImage = `url( ${destinationPlace?.img}),linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`


        setBanner(bannerImg)
        setName(destinationPlace?.name)
        setDescrip(destinationPlace?.desc.slice(0, 200) + ' ...')

        setId(destinationPlace?.id)



    }
    const history = useHistory();
    const handleBooking = () => {
        history.push(`/booking/${id}`)
    }

    return (
        <div style={banner}>
            <Header></Header>
            <Container className="text-white mt-5 pt-5 ">
                <Row>
                    <Col sm={12} md={5}>
                        {name ? <h1>{name}</h1> : <h1>TO TRAVEL IS TO LIVE!</h1>}
                        {name ? <p>{descrip}</p> : <p>Travel the world with us. Your journey starts here. Come with us ant see how beautiful this eath is</p>}

                        {name && <Button onClick={handleBooking} variant="warning px-4">Booking  <FontAwesomeIcon className="ms-2 " icon={faArrowRight} /> </Button>}
                    </Col>





                    <Col sm={12} md={7}>

                        <Swiper slidesPerView={4} spaceBetween={50} centeredSlides={true} pagination={{
                            "clickable": true
                        }} className="">


                            <SwiperSlide   ><button onClick={() => handleDestination("coxs")} className="d-flex justify-content-center align-items-end mb-5 pb-2 destination1 destinations text-white fw-bold">COX'S BAZAR</button></SwiperSlide>


                            <SwiperSlide   ><button onClick={() => handleDestination("sreemangal")} className="d-flex justify-content-center align-items-end mb-5 pb-2 destination2 destinations text-white fw-bold">SREEMANGAL</button></SwiperSlide>


                            <SwiperSlide   ><button onClick={() => handleDestination("sundarban")} className="d-flex justify-content-center align-items-end mb-5 pb-2 destination3 destinations text-white fw-bold">SUNDARBANS</button></SwiperSlide>



                            <SwiperSlide   ><button onClick={() => handleDestination("sajek")} className="d-flex justify-content-center align-items-end mb-5 pb-2 destination4 destinations text-white fw-bold">SAJEK</button></SwiperSlide>





                        </Swiper>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;