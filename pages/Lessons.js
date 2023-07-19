import Link from 'next/link';
import './Lessons.css';
import lessons from '../src/app/lessons.json';

export default function Lessons() {
    return (
        <>
            <h1 className="lesson-title">Lessons</h1>
            <div className="lesson-grid">
                {lessons.map((lesson, index) => {
                    return (
                        <Link
                            href={{
                                pathname: "/[lesson]",
                                query: { lesson: `lesson-${index + 1}` }
                            }}
                            as={`/lesson-${index + 1}`}
                            key={index}
                            passHref
                        >
                            <div className="card">
                                <h2 className="card-title">{lesson.title}</h2>
                                <p className="card-content">{lesson.subtitle}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
