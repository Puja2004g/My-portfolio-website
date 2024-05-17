import "./styles/Contacts.css";

function Contacts(){
    return(
        <div className="body">
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="6" placeholder="Type your message here..."></textarea>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contacts;