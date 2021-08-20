import React from 'react'
import ContainerPostCard from '../Components/ContainerPostCard/ContainerPostCard'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
//import FilterButton from '../Components/FilterButton/FilterButton'
import ContainerPetition from '../Components/ContainerPostCard/ContainerPetition'
import ContainerOffer from '../Components/ContainerPostCard/ContainerOffer'




function Home() {
    /*   const { user, isAuthenticated } = useAuth0()
      const [accountUser, setAccountUser] = useState({})
      const dispatch = useDispatch() */

    /*     setAccountUser({
            sub: user?.sub,    // ver con auth0
            given_name: user?.given_name,
            family_name: user?.family_name,
            email: user?.email,
            picture: user?.picture,
        }) */
    /*     if (isAuthenticated === true) {
            return
        } */

    return (
        <div className="Home">
            <Header />

            <div className="bg-gray-100">
                <ContainerPostCard />
            </div>
            <Footer />
        </div>
    )
}

export default Home
