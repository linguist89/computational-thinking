import lessons from '../src/app/lessons.json';

export default function Lesson({ lesson }) {
    return (
        <div>
            <h1>{lesson.title}</h1>
            <h2>{lesson.subtitle}</h2>
            <p>{lesson.content}</p>
        </div>
    );
}

export async function getStaticPaths() {
    // Map the lessons to their routes
    const paths = lessons.map((_, index) => ({
        params: { lesson: `lesson-${index + 1}` },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Extract the lesson number from the route
    const lessonNumber = Number(params.lesson.split('-')[1]) - 1;

    // Get the lesson data
    const lesson = lessons[lessonNumber];

    return { props: { lesson } };
}
