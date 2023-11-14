import axios from "axios";
import { useEffect } from "react";



const BACKEND_API_URL = "http://localhost:5174/FavouriteBooksList";

function DeleteBook () {

    const { id } = useParams();
    

    useEffect(() => {
        axios.delete(`${BACKEND_API_URL}/id`)
          .then((response) => {
            // Check if the array is not empty before accessing its first element
            
              // Access the title property from the first item in the array
              (response.data);
            
          })
          .catch((error) => {
            console.error("Error deleting book :", error);
            // Handle the error and display an error message
          });
      }, [id]);
    


    return (
        <div>
            <h1>Book deleted!</h1>

        </div>
    )

}

export default DeleteBook