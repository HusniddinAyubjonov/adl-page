import { reviewData } from "./constants";
import style from "./Review.module.css";

export default function Review() {
  return (
    <div className={style.review}>
      <h1 className={style.reviewTitle}>What our users say?</h1>
      <button className={style.reviewBtn}>view all comments</button>

      <div className={style.cards}>
        {reviewData.map((item, index) => (
          <div className={style.card} key={index}>
            <p className={style.cardFeeback}>{item.feedback}</p>
            <div className={style.user}>
              <img className={style.userAvatar} src={item.avatar} alt="avatar" />
              <div className={style.userInfo}>
                <h3 className={style.userFullName}>{item.fullName}</h3>
                <p className={style.userRole}>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
