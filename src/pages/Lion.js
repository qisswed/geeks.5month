import { useDispatch, useSelector } from "react-redux";
import { fetchLions } from "../redux/actions/loinActions";
import { useEffect } from "react";
import LionCard from "../components/LionCard";
import "../styles/Lions.css";

const Lions = () => {
    const { lions, loading, error } = useSelector(state => state.lionReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLions());
    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="title">Галерея Львов 🦁</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p className="error">{error}</p>}
            <div className="grid">
                {lions.map((lion, index) =>
                    <LionCard key={index} image={lion.url} />
                )}
            </div>
        </div>
    );
};

export default Lions;
