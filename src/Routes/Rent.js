import 'antd/dist/antd.css';
import './Rent.css';
import { FilterTwoTone } from '@ant-design/icons';
import { useState } from 'react';

import CardList from '../Components/CardList';
import { useEffect } from 'react';

const Rent = () => {

    const defaultFilter = {
        "location": "",
        "when": "",
        "price": "",
        "type": ""
    }
    const [filter, setFilter] = useState(defaultFilter);

    const houses = [
        {
            "id": 1,
            "name": "Lodha Palava",
            "location": "Mumbai",
            "type": "House",
            "price": "$1500",
            "image": "https://images.nobroker.in/images/8a9f91838244985c018244bbfc8a14f8/8a9f91838244985c018244bbfc8a14f8_28603_389859_large.jpg",
            "rented": false,

        },
        {
            "id": 2,
            "name": "Rutu Enclave",
            "location": "Mumbai",
            "type": "House",
            "price": "$2,600",
            "image": "https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg",
            "rented": true,
            "vacantDate": "25-12-2022"
        },
        {
            "id": 3,
            "name": "Cabiada House",
            "location": "Kanpur",
            "type": "House",
            "price": "$2000",
            "image": "https://a0.muscache.com/im/pictures/7b2945c7-e7e3-4d62-b62c-82d3235b73a0.jpg?im_w:960",
            "rented": false
        },
        {
            "id": 4,
            "name": "Avas Vikas",
            "location": "Delhi",
            "type": "House",
            "price": "$3000",
            "image": "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?s=612x612",
            "rented": true,
            "vacantDate": "25-09-2022"
        },
        {
            "id": 5,
            "name": "Barra House",
            "location": "Mumbai",
            "type": "House",
            "price": "$5000",
            "image": "https://i.pinimg.com/736x/77/4a/0c/774a0cb09e5f59c351c7221667a77acf.jpg",
            "rented": false
        },
        {
            "id": 6,
            "name": "Mohnika ghar",
            "location": "kanpur",
            "type": "House",
            "price": "$1600",
            "image": "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib:rb-1.2.1&ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBob3VzZXN8ZW58MHx8MHx8&w:1000&q:80",
            "rented": true,
            "vacantDate": "23-11-2022"
        },
        {
            "id": 7,
            "name": "Pexels",
            "location": "Delhi",
            "type": "House",
            "price": "$2700",
            "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
            "rented": false,

        },
        {
            "id": 8,
            "name": "Forbes",
            "location": "Kanpur",
            "type": "House",
            "price": "$1400",
            "image": "https://img.staticmb.com/mbcontent/images/uploads/2022/5/modern%20Kerala%20house%20design.jpg",
            "rented": true,
            "vacantDate": "25-10-2022"
        },
        {
            "id": 9,
            "name": "Palm Harbor",
            "location": "Banglore",
            "type": "House",
            "price": "$3500",
            "image": "https://rew-feed-images.global.ssl.fastly.net/bcaral_mcranston/_cloud_media/re_1/singlefamily/334313-1-b429c455baf793595c612f9d1f50df4e-m.jpg",
            "rented": false
        },
        {
            "id": 10,
            "name": "Vansh Home",
            "location": "Banglore",
            "type": "House",
            "price": "$1400",
            "image": "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/500_1614104231_126.jpg?watermark:false",
            "rented": true,
            "vacantDate": "25-10-2022"
        },
        {
            "id": 11,
            "name": "The Laurels",
            "location": "Banglore",
            "type": "Villa",
            "price": "$1500",
            "image": "https://i.pinimg.com/736x/e7/af/64/e7af64e81ef6bcc4332900d0ecb1e3c8--stan-laurel-beverly-hills.jpg",
            "rented": false
        },
        {
            "id": 12,
            "name": "The Gables",
            "location": "Mumbai",
            "type": "Villa",
            "price": "$3500",
            "image": "https://stylesatlife.com/wp-content/uploads/2021/02/Latest-villa-designs15.jpg",
            "rented": true,
            "vacantDate": "25-10-2022"
        },
        {
            "id": 13,
            "name": "The Orchard",
            "location": "Kanpur",
            "type": "Villa",
            "price": "$800",
            "image": "https://samujana.com/wp-content/uploads/2022/04/slider_samujana_villa_04b-1.jpeg",
            "rented": false
        },
        {
            "id": 14,
            "name": "Treetops",
            "location": "Delhi",
            "type": "Villa",
            "price": "$4000",
            "image": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/b1140b88-a87a-4a66-932c-ca981648e030-treetop-homes-cover-malan-vorster.jpg",
            "rented": true,
            "vacantDate": "23-11-2022"
        },
        {
            "id": 15,
            "name": "Honeysuckle Cottage",
            "location": "Mumbai",
            "type": "Villa",
            "price": "$2200",
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/73/Honeysuckle_Cottage_Visitor_Centre_-_geograph.org.uk_-_2027.jpg",
            "rented": false
        },
        {
            "id": 16,
            "name": "Clair De Lune",
            "location": "Banglore",
            "type": "Villa",
            "price": "$3800",
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/90/0d/ad/filename-dsc00250-jpg.jpg",
            "rented": true,
            "vacantDate": "22-10-2022"
        },
        {
            "id": 17,
            "name": "Dolce Vita Villa",
            "location": "Mumbai",
            "type": "Villa",
            "price": "$2500",
            "image": "https://q-xx.bstatic.com/xdata/images/hotel/840x460/160102996.jpg?k=6f4e57423faa3ab581885c937467287d08af9159c52612b258a15c0f67b8ec1f&o=",
            "rented": false
        },
        {
            "id": 18,
            "name": "Villa Belissimo",
            "location": "Delhi",
            "type": "Villa",
            "price": "$2000",
            "image": "https://media.vrbo.com/lodging/35000000/34390000/34385900/34385868/2e2044d2.f6.jpg",
            "rented": false
        },
        {
            "id": 19,
            "name": "Chateau Relaxo",
            "location": "Kanpur",
            "type": "Villa",
            "price": "$1500",
            "image": "https://cf.bstatic.com/images/hotel/840x460/385/385235955.jpg",
            "rented": true,
            "vacantDate": "12-10-2022"
        },
        {
            "id": 20,
            "name": "Great Escape",
            "location": "Banglore",
            "type": "Villa",
            "price": "$3300",
            "image": "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/4:3/w_1024,h_768,c_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
            "rented": false
        },
        {
            "id": 21,
            "name": "7th Heaven",
            "location": "Banglore",
            "type": "Bunglow",
            "price": "$4500",
            "image": "https://thearchitectsdiary.com/wp-content/uploads/2019/12/vyanjankale-Assoc..jpg",
            "rented": false
        },
        {
            "id": 22,
            "name": "Primrose Cottage",
            "location": "Delhi",
            "type": "Bunglow",
            "price": "$5000",
            "image": "https://www.visitroswellga.com/imager/files_idss_com/C357/1befaef6-2acf-4a64-ace5-d974c5d502ad_1142670e945bf17cfe114ca93eb6fe24.jpg",
            "rented": true,
            "vacantDate": "10-11-2022"
        },
        {
            "id": 23,
            "name": "Beverly Springfield",
            "location": "Kanpur",
            "type": "Bunglow",
            "price": "$5500",
            "image": "https://img.staticmb.com/mbcontent/images/uploads/2022/5/Mid-Century%20Modern%20Bungalow%20Design.jpg",
            "rented": false
        },
        {
            "id": 24,
            "name": "Faulkner Ave",
            "location": "Banglore",
            "type": "Bunglow",
            "price": "$6500",
            "image": "https://ssl.cdn-redfin.com/photo/235/mbphoto/228/genMid.WVBE2007228_1_2.jpg",
            "rented": true,
            "vacantDate": "12-01-2023"
        },
        {
            "id": 25,
            "name": "Dreamsville",
            "location": "Delhi",
            "type": "Bunglow",
            "price": "$4500",
            "image": "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/311606660.jpg?k=e8c92d64ef023803a2d0546d7bdeee09cf98fb7d5958a50c5a55353b3f19f3e2&o=",
            "rented": false
        },
        {
            "id": 26,
            "name": "The Bunglow",
            "location": "Mumbai",
            "type": "Bunglow",
            "price": "$3000",
            "image": "https://i.pinimg.com/736x/57/79/97/577997b7da69918a93e04165a575f0c6.jpg",
            "rented": false
        },
        {
            "id": 27,
            "name": "The Hollies",
            "location": "Mumbai",
            "type": "Bunglow",
            "price": "$8000",
            "image": "https://i.pinimg.com/736x/f5/3a/d2/f53ad219ace400cb67d26a5e8807e813--bungalow-house-plans-craftsman-bungalows.jpg",
            "rented": true,
            "vacantDate": "21-11-2022"
        },
        {
            "id": 28,
            "name": "Oak Barn",
            "location": "Banglore",
            "type": "Bunglow",
            "price": "$6000",
            "image": "https://cdn.mos.cms.futurecdn.net/gfjSaRUF4t3t2cZT7CGzef.jpg",
            "rented": false,

        },
        {
            "id": 29,
            "name": "Cumfrubrum",
            "location": "Delhi",
            "type": "Bunglow",
            "price": "$5000",
            "image": "https://3.imimg.com/data3/LP/SX/MY-9387387/deep-500x500.jpg",
            "rented": false
        },
        {
            "id": 30,
            "name": "Manchester",
            "location": "Mumbai",
            "type": "Bunglow",
            "price": "$7500",
            "image": "https://c8.alamy.com/comp/MPX82C/bungalows-in-walkden-greater-manchester-late-20th-century-build-bungalows-some-adapted-to-give-disability-ramps-level-access-with-handrail-MPX82C.jpg",
            "rented": true,
            "vacantDate": "13-10-2022"
        }
    ]
    const [filteredHouses, setFilteredHouses] = useState([]);

    const [loc, setLoc] = useState("Kanpur");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("form submitted");
        console.log(event.target.when.value);
        setFilter(
            {
                "location": event.target.location.value,
                "when": event.target.when.value,
                "price": event.target.price.value,
                "type": event.target.type.value
            }
        )
    }
    useEffect(() => {
        let i = 0;
        if (filter.price !== "") {
            while (filter.price[i] !== '-') {
                i++
            }
        }
        const initialFilter = filter.price.substring(1, i);
        const finalFilter = filter.price.substring(i + 2);
        const initialVal = parseInt(initialFilter);
        const finalVal = parseInt(finalFilter);
        const year = parseInt(filter.when.substring(0, 4));
        const month = parseInt(filter.when.substring(5, 7));
        const day = parseInt(filter.when.substring(8));

        console.log("initial", initialVal, finalVal);

        let filteredHousesdone;
        //filter logic
        if (filter.when !== "") {

            if (!isNaN(finalVal) && !isNaN(initialFilter)) {
                filteredHousesdone = houses.filter(house => {
                    const housePrice = parseInt(house.price.substring(1));
                    if (house.rented === false) {
                        return (house.location.toLowerCase().includes(filter.location.toLowerCase()) && house.type.includes(filter.type) && housePrice >= initialVal && housePrice <= finalVal);
                    }
                    const vacantDay = parseInt(house.vacantDate.substring(0, 2));
                    const vacantMonth = parseInt(house.vacantDate.substring(3, 5));
                    const vacantYear = parseInt(house.vacantDate.substring(6));

                    return (house.location.toLowerCase().includes(filter.location.toLowerCase()) && house.type.includes(filter.type) && housePrice >= initialVal && housePrice <= finalVal && (year > vacantYear || (year === vacantYear && month > vacantMonth) || (year === vacantYear && month === vacantMonth && day > vacantDay)));

                })
            }
        }
        else if (!isNaN(finalVal) && !isNaN(initialFilter)) {
            filteredHousesdone = houses.filter(house => {
                const housePrice = parseInt(house.price.substring(1));
                return (house.location.toLowerCase().includes(filter.location.toLowerCase()) && house.type.includes(filter.type) && housePrice >= initialVal && housePrice <= finalVal);
            }
            )
        }
        else {
            filteredHousesdone = houses.filter(house => {
                return (house.location.toLowerCase().includes(filter.location.toLowerCase()) && house.type.includes(filter.type));
            })
        }
        
        console.log("filteredHouses", filteredHousesdone);
        setFilteredHouses(filteredHousesdone);
    }, [filter]);

    console.log(filteredHouses);


    return (
        <div className='bg-slate-100 min-h-screen'>
            <div className="flex justify-between ">
                <h1 className="text-3xl font-bold mt-10 ml-28">
                    Search Properties to Rent
                </h1>
                <div className='flex relative'>
                    <input type="search" className="mr-28 px-2 border-2 border-[#e5e5e5] py-2 h-[43px] w-48 self-center rounded" placeholder='Search with Search Box' />
                    <FilterTwoTone className='absolute right-28 top-10 h-7 w-9' />

                </div>
            </div>
            <div className="m-auto flex w-[81.25vw] bg-white h-20">
                <form onSubmit={onSubmitHandler}>
                    <div className='w-[17vw] inline-block  border-r-2 h-[4.5rem] mt-1'>
                        <span className='pr-40 mt-8 pl-8'>Location</span>   
                        <input type="text" name='location' id="location" value={loc} className='input ml-8 text-black text-xl font-bold border-0 w-[14vw]' onChange={(e) => setLoc(e.target.value)} />
                    </div>
                    <div className='w-[17vw] inline-block border-r-2 h-[4.5rem] mt-1 '>
                        <span className='pl-8 pr-20'>When</span>
                        <input type="date" name='when' id='when' className='input ml-8 text-black text-xl font-bold border-0 w-[14vw]' />

                    </div>
                    <div className='w-[17vw] inline-block  border-r-2 h-[4.5rem] mt-1'>
                        <span className='pr-40 mt-8 pl-8'>Price</span>
                        <select className='input ml-8 text-black text-xl font-bold border-0 w-[14vw]' name="price" id="price">
                            <option value="$1000-$2000">$1000-$2000</option>
                            <option value="$2000-$3000">$2000-$3000</option>
                            <option value="$3000-$4000">$3000-$4000</option>
                            <option value="$4000-$5000">$4000-$5000</option>
                            <option value="$5000-$6000">$5000-$6000</option>
                            <option value="$6000-$7000">$6000-$7000</option>
                            <option value="$7000-$8000">$7000-$8000</option>
                        </select>
                    </div>
                    <div className='w-[17vw] inline-block  border-r-2 h-[4.5rem] mt-1'>
                        <span className='pr-10 mt-8 pl-8'>Property Type</span>
                        <select className='input ml-8 text-black text-xl font-bold border-0 w-[14vw]' name="type" id="type">
                            <option value="House">House</option>
                            <option value="Villa">Villa</option>
                            <option value="Bunglow">Bunglow</option>
                        </select>
                    </div>
                    <input type="submit" value="Search" className="order-2 bg-[#3a89ff] hover:bg-[#82aff3] text-white text-sm rounded-lg w-[5vw] px-[1vw] py-2 mr-[4vw] ml-[3.5vw] my-2" />
                </form>
            </div>
            <CardList houses={filteredHouses} />
        </div>
    )
}
export default Rent;