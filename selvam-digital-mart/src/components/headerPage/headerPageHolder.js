import TopTealsHolder from "../topTealsHolder/topDealsHolder";
import SlideShow from "../slideShow/slideShow";
import Homepage from "../homepage/homepage";

function HeaderPageHolder(){
    return(
        <div className="headerPageHolder">
            <SlideShow />
            <Homepage />
            <TopTealsHolder />
        </div>
    )
}
export default HeaderPageHolder;