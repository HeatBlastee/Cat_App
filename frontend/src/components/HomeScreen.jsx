import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const HomeScreen = () => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const resp = await axios.get("http://localhost:3000/api/cats");
                setCats(resp.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch cat data');
                setLoading(false);
            }
        };
        fetchCats();
    }, []);

    if (loading) return <div className="text-center text-lg py-10 text-blue-600 animate-pulse">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Cat Breeds</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
                {cats.map((cat, index) => (
                    <Link to={`/cat/${cat._id}`} key={index}>
                    <Card
                        key={index}
                        className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-200 bg-white overflow-hidden"
                    >
                        <CardHeader className="p-0">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-70 object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">{cat.name}</CardTitle>
                            <p className="text-gray-700 mb-4">
                                {cat.description.length > 60 
                                    ? cat.description.slice(0, 60) + "..." 
                                    : cat.description}
                            </p>
                            <div className="text-sm text-gray-500 mb-4">
                                <p><span className="font-medium">Temperament:</span> {cat.temperament}</p>
                                <p><span className="font-medium">Origin:</span> {cat.origin}</p>
                            </div>
                        </CardContent>
                    </Card>
                    </Link>
                ))}
            </div>
        </div>
        </>        
    );
};

export default HomeScreen;
