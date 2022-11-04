import { useState } from "react";
import Head from "./Components/Head";
import ProductReviewList from "./Components/ProductReviewList";
import ProductReviewStats from "./Components/ProductReviewStats";
import ProductData from "./Data/ProductData";
import ReviewForm from "./Components/ReviewForm";
function App() {
  const [review, setReview] = useState(ProductData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Head />
      <div className="container">
        <ReviewForm />
        <ProductReviewStats review={review} />
        <ProductReviewList
          review={review}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}
export default App;
