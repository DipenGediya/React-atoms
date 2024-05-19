import React from "react";
import Banner from "../Banner";
import { Button, H2, P } from "../atoms/Atom";
import { Card, Productcard } from "../Card";
import { Link } from "react-router-dom";


function Home() {

    let data = [
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/6585540963e3915eb25fec7d_Service%201.webp",
            title: "Salted Products",
            desc: "Organic farming services play a crucial role in assisting farmers in their transition to and maintenance of organic practices."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/65855458ff1e6f2f59e4d0b5_SErvice%202.webp",
            title: "Food Delivery",
            desc: "Organic farming services play a crucial role in assisting farmers in their transition to and maintenance of organic practices."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/658554832f853e3999d085de_Service%203.webp",
            title: "Cheese Making",
            desc: "Organic farming services play a crucial role in assisting farmers in their transition to and maintenance of organic practices."
        }

    ]

    let productData = [
        {
            id: 1,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586d14ee3743446146851af_7.jpg",
            p_name: "Apples",
            p_price: "$ 9.99 USD"
        },
        {
            id: 2,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586d19f08d9c9ac6d3e6bf2_8.jpg",
            p_name: "Bananas",
            p_price: "$ 6.99 USD"
        },
        {
            id: 3,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586d1eb00518a27e2a78c62_9.jpg",
            p_name: "Oranges",
            p_price: "$ 12.99 USD"
        },
        {
            id: 4,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586bb275c1b0a7e25879d04_4.jpg",
            p_name: "Broccoli",
            p_price: "$ 9.99 USD"
        },
        {
            id: 5,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586bac6646aea108e781201_3.jpg",
            p_name: "Cucumbers",
            p_price: "$ 7.99 USD"
        },
        {
            id: 6,
            p_image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/6586d6d108d9c9ac6d417966_15.jpg",
            p_name: "Honeyed Haven",
            p_price: "$ 25.99 USD"
        },
    ]

    let blogData = [
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/657c4df7860bd1c86e6d73ef_Blog%20Small.jpg",
            title: "Agriculture Frontier",
            desc: "Provide food, fibers, medicinal plants, and other products to sustain and enhance human life."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/657c4e1801161cabdda12830_Blog%20Small%202.jpg",
            title: "Cultivating Abundance",
            desc: "Provide food, fibers, medicinal plants, and other products to sustain and enhance human life."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e67c6/657c4e35793d6255b2249d1c_Blog%20Small%203.jpg",
            title: "The Green Horizon",
            desc: "Provide food, fibers, medicinal plants, and other products to sustain and enhance human life."
        }
    ]

    return (
        <>
            <Banner />

            <section className="services">
                <div className="container">
                    <div className="services-heading">
                        <div className="row">
                            <div className="col-6">
                                <H2 content="What We Do" property="heading" />
                            </div>
                            <div className="col-6 text-end" >
                                <Button content="Our Services" property="btn primary-btn" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            data.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-4">
                                            <Card image={val.image} title={val.title} desc={val.desc} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="organic">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <H2 content="We Are The Best Organic Farming" property="heading" />
                            <Button content="About Us" property="btn primary-btn mt-5" />
                        </div>
                        <div className="col-7">
                            <div className="organic-data d-flex justify-content-between mb-4">
                                <div className="organic-line"></div>
                                <P content="Organic farming is not just a method, it's a commitment to work in harmony with nature, to nurture the soil, cultivate with care, and foster a sustainable legacy for future generations." property="fw-bold ps-3 py-2" />
                            </div>

                            <P content="Organic farming is an agricultural approach that prioritizes the use of natural and sustainable practices to cultivate crops and raise livestock. The principles of organic farming are rooted in enhancing soil health, promoting biodiversity, and minimizing the use of synthetic chemicals." property="text-secondary fw-semibold" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="product">
                <div className="container">
                    <div className="row">
                        {
                            productData.map((val, index) => {
                                return (
                                    <div className="col-4">
                                        <div className="product-info text-center mb-4">
                                            <Productcard p_image={val.p_image} p_name={val.p_name}
                                                p_price={val.p_price} />
                                                
                                            <Link to={`/${val.id}`} className="btn primary-btn">More Details</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <H2 content="Read Our Blog" />
                        </div>
                        <div className="col-6 text-end">
                            < Button content="Read All" property="btn primary-btn" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            blogData.map((val, indx) => {
                                return (
                                    <>
                                        <div className="col-4">
                                            <Card image={val.image} title={val.title} desc={val.desc} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home