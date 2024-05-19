let Button = ({ content, property }) => (

    <button className={property}>{content}</button>
)

let P = ({ content, property }) => <p className={property}>{content}</p>

let H2 = ({ content, property }) => (
    <h2 className={property}>{content}</h2>
)

let H5 = ({content}) => <h5>{content}</h5>

let H4 = ({content,property})=><h4 className={property}>{content}</h4>

export { Button, P, H2 ,H5 ,H4}