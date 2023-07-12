import Link from 'next/link';
import './Lessons.css';

export default function Lessons() {
    const data = ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'];
    return (
        <>
        <h1 className="lesson-title">Lessons</h1>
        <div className="lesson-grid">
            {data.map((item, index) => {
                return (
                    <Link href={`/lesson-${index+1}`} key={index}>
                        <div className="card">
                            <h2 className="card-title">{item}</h2>
                            <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Link>
                );
            })}
        </div>
        </>
    )
}
