import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useDestinations from '../../hooks/useDestinations';
import Header from '../Shared/Header/Header';

const Booking = () => {
    const [firstTime, setFirstTime] = useState(true)

    const { destinationId } = useParams();
    const { destinations,
        bannerImg,
        banner,

        setBanner,

    } = useDestinations();
    const destinationPlace = destinations?.find(dest => dest.id === +destinationId);




    if (firstTime && destinationPlace) {
        bannerImg.backgroundImage = `url( ${destinationPlace?.img}),linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`
        setBanner(bannerImg)
        setFirstTime(false)
    }



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div style={banner}>
            <Header></Header>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col sm={12} md={6}>
                        <div className="text-white">
                            <h1>{destinationPlace?.name}</h1>
                            <p>{destinationPlace?.desc}</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="px-2 mx-2 mx-md-5 bg-white py-3 rounded-3">
                                <h6 className="text-muted">Origins</h6>
                                <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2"  {...register("origin")} />

                                {errors.origin && <small>This field is required</small>}

                                <h6 className="text-muted">Destination</h6>
                                <input defaultValue={destinationPlace?.name} className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2" {...register("destination", { required: true })} />

                                {errors.destination && <small>This field is required</small>}


                                <div className=" d-flex justify-content-around">
                                    <div className="me-auto">
                                        <h6 className="text-muted">From</h6>
                                        <input className=" fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2 px-2" type="date"  {...register("from", { required: true })} />
                                        {errors.from && <small>This field is required</small>}
                                    </div>
                                    <div className="me-auto">
                                        <h6 className="text-muted">To</h6>
                                        <input className="fw-bold bg-secondary bg-opacity-25 border-0 rounded py-2 px-2" type="date" {...register("to", { required: true })} />
                                        {errors.to && <small>This field is required</small>}
                                    </div>



                                </div>

                                {errors.exampleRequired && <span>This field is required</span>}
                                <br />
                                <br />
                                <br />
                                <br />

                                <input className=" bg-warning border-0 rounded py-2" type="submit" />
                            </Row>
                        </form>
                    </Col>
                </Row>


            </Container>


        </div>
    );
};

export default Booking;