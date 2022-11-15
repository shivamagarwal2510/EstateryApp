import Card from "./Card.js";
const CardList = ({houses})=>{
    return(
        <>
            <div className="cardList flex flex-col flex-wrap ">
                
                <div className="cards flex flex-wrap m-auto w-[84.1vw]">
                    {
                        houses.map(element => {
                            const house = {
                                id: element.id,
                                name: element.name,
                                location: element.location,
                                type: element.type,
                                price: element.price,
                                image:element.image
                            }
                            return (
                                <Card house={house}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default CardList;