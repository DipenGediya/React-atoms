import React from "react";
import Layers from "../Layers";
import { Button, H2, H4, P } from "../atoms/Atom";

function About() {

    let layersData = [
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/65804a6e53784bbb3be85835_Icon%201.webp",
            title: "Layers & Broilers",
            desc: "The management, care, and breeding considerations for each category are tailored to their specific roles in the agricultural industry."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/65804a6f02b1ea2fae3dbbd6_Icon%202.webp",
            title: "Fresh Milk Shop",
            desc: "In addition to regular fresh milk, our shops may offer variations such as organic milk, flavored milk, or specialty dairy products."
        },
        {
            image: "https://assets-global.website-files.com/657ade197d97985d518e675c/65804a6f467db6b2cf538d5a_Icon%203.webp",
            title: "Dairy Products",
            desc: "Milk is the primary ingredient in most dairy products, containing essential nutrients such as calcium, vitamin D, and protein."
        },
    ]

    return (
        <>
            <section className="organic">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <H2 content="We Are Agriculture Farm" property="heading" />
                            <div className="about-number d-flex mt-5">
                                <div className=".col-5">
                                    <h3>32k</h3>
                                    <P content="Organic livestock are typically provided with access to pasture and outdoor environments." property="fw-semibold text-secondary" />
                                </div>
                                <div className="col-1"></div>
                                <div className=".col-5">
                                    <h3>125k</h3>
                                    <P content="Organic livestock are typically provided with access to pasture and outdoor environments." property="fw-semibold text-secondary" />
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-6">
                            <div className="organic-data d-flex justify-content-between mb-4">
                                <div className="organic-line"></div>
                                <P content="Organic farming is not just a method, it's a commitment to work in harmony with nature, to nurture the soil, cultivate with care, and foster a sustainable legacy for future generations." property="fw-bold ps-3 py-2" />
                            </div>

                            <P content="Organic farming is an agricultural approach that prioritizes the use of natural and sustainable practices to cultivate crops and raise livestock. The principles of organic farming are rooted in enhancing soil health, promoting biodiversity, and minimizing the use of synthetic chemicals." property="text-secondary fw-semibold" />

                            <P content="Techniques such as crop rotation, cover cropping, and composting are employed to enhance soil structure and fertility." property="text-secondary fw-semibold" />

                            <Button content="About Us" property="btn primary-btn" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="quality">

                <div className="row">
                    <div className="col-6">
                        <div className="about-image">
                            <img src="https://assets-global.website-files.com/657ade197d97985d518e675c/6582fce52a1adbaca36bef2b_About%20Img%20(4)-p-800.webp" className="rounded" alt="" />
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <H2 content="We're Providing High-Quality Products" property="heading text-light" />

                        <div className="about-content">
                            {
                                layersData.map((val, index) => {
                                    return (
                                        <>
                                            <Layers image={val.index} title={val.title} desc={val.desc} />
                                        </>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About