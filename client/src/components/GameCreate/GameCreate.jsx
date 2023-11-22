import { useState } from "react";
import * as gameService from "../../services/gameService";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";

const FORM_KEYS = {
    title: "title",
    category: "category",
    maxLevel: "maxLevel",
    imageUrl: "imageUrl",
    summary: "summary",
};

const initialFormState = {
    [FORM_KEYS.title]: "",
    [FORM_KEYS.category]: "",
    [FORM_KEYS.maxLevel]: "",
    [FORM_KEYS.imageUrl]: "",
    [FORM_KEYS.sum]: "",
}

export default function GameCreate() {
    const [formValues, setFormValues] = useState(initialFormState);

    const changeChandler = (e) => {
        setFormValues(state => ({
            ...state, 
            [e.target.name]: e.target.value,
        }));
    };

    const navigate = useNavigate();
    const createGameSubmitHandler = async (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.create(gameData);

            navigate(Path.Catalog);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameSubmitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        value={formValues.title}
                        name={FORM_KEYS.title}
                        placeholder="Enter game title..."
                        onChange={changeChandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={formValues.category}
                        name={FORM_KEYS.category}
                        onChange={changeChandler}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        value={formValues.maxLevel}
                        name={FORM_KEYS.maxLevel}
                        min="1"
                        placeholder="1"
                        onChange={changeChandler}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={formValues.imageUrl}
                        name={FORM_KEYS.imageUrl}
                        placeholder="Upload a photo..."
                        onChange={changeChandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name={FORM_KEYS.summary}
                        id="summary"
                        value={formValues.summary}
                        onChange={changeChandler}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}
