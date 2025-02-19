import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLions } from "./redux/actions/loinActions";
import LionCard from "./components/LionCard";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const { lions, loading, error } = useSelector((state) => state.lionReducer);

    useEffect(() => {
        dispatch(fetchLions());
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="title">Галерея львов 🦁</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p className="error">{error}</p>}
            <div className="grid">
                {lions.map((lion, index) => (
                    <LionCard key={index} image={lion.url} />
                ))}
            </div>
        </div>
    );
};

export default App;
