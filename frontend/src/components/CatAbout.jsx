import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateDialog from "./UpdateDialog";

const CatAbout = () => {
    const id = useParams().id;
    const [cat, setCat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const resp = await axios.get(`http://localhost:3000/api/cats/${id}`);
                setCat(resp.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch cat details');
                setLoading(false);
            }
        };
        fetchCat();
    }, [id]);

    if (loading) return <div className="text-center text-lg py-10 text-blue-600 animate-pulse">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
    return (
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">About</h1>
        <div className="flex flex-col md:flex-row items-center bg-gray-200 p-4 rounded-lg shadow-lg gap-6">
          <div className="md:w-1/2">
            <img
              src={cat.image}
              alt="Cat"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{cat.name}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {cat.description}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Origin : {cat.origin}

            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Colors : {cat.colors}
              
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Temperament : {cat.temperament}
              
            </p>
          </div>
        </div>
        <UpdateDialog catData={cat}/>
      </div>
    );
  };
  
  export default CatAbout;
  