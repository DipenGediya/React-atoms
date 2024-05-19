import { H4, H5, P } from "./atoms/Atom"

function Card({ image, title, desc }) {
    return (
        <>
            <div class="card border-0">
                <img src={image} class="card-img-top rounded" alt="..." />
                <div class="card-body">
                    <H5 content={title} />
                    <P content={desc} />
                </div>
            </div>
        </>
    )
}

function Productcard({ p_image, p_name, p_price }) {
    return (
        <>
            <div class="card border-0">
                <div className="images rounded">
                    <img src={p_image} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <H4 content={p_name} property="product-head" />
                    <P content={p_price} property="product-price fw-bold mb-0" />
                </div>
            </div>
        </>
    )
}

export { Card, Productcard }