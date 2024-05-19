import { H4, H5, P } from "./atoms/Atom";

function Layers({image ,title ,desc}) {
    return (
        <>
            <div className="about-layers py-4 d-flex">
                <div className="col-2">
                    <img src={image} alt="" />
                </div>
                <div className="col-9 text-start">
                    <H4 content={title} property="text-light" />
                    <P content={desc} property="text-light" />
                </div>
            </div>
        </>
    )
}

export default Layers;