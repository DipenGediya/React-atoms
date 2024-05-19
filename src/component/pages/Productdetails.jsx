import React from "react";
import { useParams } from "react-router-dom"
import { Productcard } from "../Card";
import { H4, P } from "../atoms/Atom";

function Productdetails() {

    let { id } = useParams();

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

    let result = productData.filter((val) => val.id == id)

    return (
        <>
            <scetion className="product">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-4">
                            <div class="card border-0 text-center">
                                <div className="images rounded">
                                    <img src={result[0].p_image} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                    <H4 content={result[0].p_name} property="product-head" />
                                    <P content={result[0].p_price} property="product-price fw-bold mb-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>
        </>
    )
}

export default Productdetails