import Planets from "./Planets";
import PageTitle from "./PageTitle";
import ShootingStars from "./ShootingStars";

const Body = () => {

  return(
    <>
      <ShootingStars />
      <PageTitle className={'name'}>Planetary Exploration</PageTitle>
      <PageTitle className={'title'}>Terrestrial Planets</PageTitle>
      <Planets />
    </>
  )
}

export default Body