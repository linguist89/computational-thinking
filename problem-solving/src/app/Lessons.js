import './Lessons.css';

export default function Lessons() {
    const data = ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'];
    return (
        <div className="lesson-grid">
            {data.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <h2 className="card-title">{item}</h2>
                        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                );
            })}
        </div>
    )
}
