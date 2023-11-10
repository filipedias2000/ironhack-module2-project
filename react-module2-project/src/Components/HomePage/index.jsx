import { useEffect, useState } from "react";
import axios from "axios";


const API_URL = "https://openlibrary.org/works";

function HomePage() {

    const [works, setWorks] = useState([""]);

    const [fetching, setFetching] = useState(true)

    useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            setWorks(response.data);
            setFetching(false); 
        })
    }, []);




    return(
        <div>
            <h1>Search for a book</h1>
            {works.map((work)=> 
            {
                return(
                    <div key={`ISBN:${work.ISBN}`}>
                        {/* <Link to={`/works/`}> */}
                            {/* <img src={work.image_url} /> */}
                            <div>
                                <h3>{work.name}</h3>
                               
                            </div>
                        {/* </Link> */}
                        <br />
                    </div>
                )
            })

            }
          

        </div>

    )
}

export default HomePage;