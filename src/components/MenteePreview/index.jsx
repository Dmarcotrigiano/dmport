import { h } from "preact";
import Styles from "./styles.module.scss";

function MenteePreview({ mentee }) {
  return (
    <div className={Styles.card}>
      <div
        className={Styles.titleCard}
        style={`background-image:url(${mentee.img})`}>
        <h1 className={Styles.title}>{mentee.title}</h1>
      </div>
      <div className="pa3">
        <p className={`${Styles.desc} mt0 mb2`}>{mentee.description}</p>
        <div className={Styles.tags}>
          Tagged:
          {mentee.tags.map((t) => (
            <div className={Styles.tag} data-tag={t}>
              {t}
            </div>
          ))}
        </div>
        <a className={Styles.link} href={mentee.url}>
          <span className={Styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  );
}

export default MenteePreview;
