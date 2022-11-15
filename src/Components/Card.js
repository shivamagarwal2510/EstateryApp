import "./Card.css"

const Card = ({ house }) => {
    return (
        <>
            <div className="card border-2 rounded shadow-xl w-[26.7vw] m-2 h-[64.3vh] hover:shadow-slate-50 relative " >
                <div className=" w-[26.4vw] h-[46vh] overflow-hidden">
                    <img src={`${house.image}`} alt="house" className="h-[48vh] w-[26.7vw]" />
                </div>

                <h3 className="ml-4 text-[#3a89ff] text-lg mt-2 mb-0">{house.price}<span className="text-sm text-slate-400">/month</span></h3>

                <p className="ml-4 mb-0 text-xl font-bold ">{`${house.name} `}</p>
                <p className="ml-4 mb-1 text-slate-400">{house.location}</p>
                <hr/>

                <div className="mb-1 absolute bottom-2 text-slate-400 left-12">

                    <span>3 Beds</span>
                </div>
                <div className="mb-1 text-slate-400 absolute bottom-2 left-[10vw]">
                    <span> 2 Bathrooms</span>
                </div>
                <div className="mb-1 text-slate-400 absolute bottom-2 right-12">

                    <span>5x7 m<sup>2</sup></span>

                </div>
            </div>
        </>
    )
}
export default Card;