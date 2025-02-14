export default function Form() {
    render (
        <form>
            <h2>Add a new task</h2>

            <label>
                Description:
                <input type="text" maxLength="150" />
            </label>

            <label>
                Status:
                <select>
                    <option value="open">Open</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            <button type="submit">Add</button>
        </form>
    );
}