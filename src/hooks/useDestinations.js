import { useEffect, useState } from "react"

const useDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    const bannerImg = {
        backgroundImage: `url( "https://i.ibb.co/qWZrCys/Rectangle-1.png"),linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
        backgroundBlendMode: "overlay",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "780px",
        width: "100%"
    }

    const [banner, setBanner] = useState(bannerImg);
    const [name, setName] = useState('');
    const [descrip, setDescrip] = useState('');


    useEffect(() => {
        fetch('/destinations.json')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, [])
    return {
        destinations,
        bannerImg,
        banner,
        name,
        descrip,
        setBanner,
        setName,
        setDescrip

    }

}
export default useDestinations;