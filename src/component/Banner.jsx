import { P } from "./atoms/Atom"

function Banner() {
    return(
        <>
            <section className="banner">
                <div className="container">
                        <div className="col-6">
                            <h1>We're Helping You <b> Start New Life</b></h1>
                            <P content = "Agriculture is a crucial and multifaceted industry that involves the cultivation of plants and the rearing of animals to provide food, fibers, medicinal plants, and other products to sustain and enhance human life." property ="text-light mt-3"/>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Banner