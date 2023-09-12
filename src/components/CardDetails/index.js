import "./index.css";

const Card = (props) => {
  const { single } = props;
  const {
    head,
    para,
    description,
    amount,
    offer,
    listHead,
    listItem1,
    listItem2,
    listItem3,
  } = single;

  return (
    <div className="card">
      <div className="content-in-big-screen">
        <h1>{head}</h1>
        <h4>{para}</h4>
        <p>{description}</p>
      </div>
      <h1>
        ₹ {amount} <span>INR/mo</span>
      </h1>
      <h4 className="disign-for-offers">{offer}</h4>
      <h1>{listHead}</h1>
      <ul>
        <li>
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694509335/check-mark-1292787_640_xy0iqu.webp"
            alt="tick"
            className="tick-img"
          />
          <p>{listItem1}</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694509335/check-mark-1292787_640_xy0iqu.webp"
            alt="tick"
            className="tick-img"
          />
          <p>{listItem2}</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1694509335/check-mark-1292787_640_xy0iqu.webp"
            alt="tick"
            className="tick-img"
          />
          <p>{listItem3}</p>
        </li>
      </ul>
      <button type="button" className="try-for-free-btn">
        Try for free
      </button>
    </div>
  );
};
export default Card;
