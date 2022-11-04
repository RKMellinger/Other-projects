import { useState } from "react";
import Cards from "./Cards";
import Buttons from "./Buttons";
function ReviewForm() {
  console.log("Here's ReviewForm");
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };
  return (
    <Cards>
      <form>
        <h2>How would you rate this product?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Buttons
            type="submit"
            isDisabled={btnDisabled}>
            Send
          </Buttons>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Cards>
  );
}
export default ReviewForm;
