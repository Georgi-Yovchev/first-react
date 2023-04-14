import style from "./CreateItem.module.css";

export const CreateItem = () => {
    return (
        <form className={style["create-item"]}>
            <label forHtml="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br></br>

            <label forHtml="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br></br>

            <label forHtml="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <br></br>

            <input type="submit" value="Submit" />
        </form>
    );
};
