import {useGetSetsQuery} from "./redux/api/api.js";
import {useSelector} from "react-redux";


function App() {
    const {isLoading} = useGetSetsQuery();
    const sets = useSelector(state=>state.sets);

    const elements = sets.map(itm=>
    <h1 key={itm.id}>{itm.name}</h1>
    )

    return (
        <>
            {isLoading?<h1>Loading...</h1>:elements}

        </>
    )
}

export default App
