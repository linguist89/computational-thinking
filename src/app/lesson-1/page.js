import Link from 'next/link';
import './lesson1.css';

export default function Lesson1({ title, subTitle, content, extraInfo }) {
  return (
    <>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
        <div className="lesson">
            <h1 className="lesson-title">Lesson 1</h1>
            <h3 className="lesson-subtitle">Subtitle</h3>
            <p className="lesson-content">Content</p>
            {extraInfo && <p className="lesson-extra-info">{extraInfo}</p>}
        </div>
    </>
  );
}