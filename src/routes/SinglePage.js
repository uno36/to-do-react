import { useParams } from 'react-router-dom';

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
        "The todo app is a versatile application that enables users to efficiently manage their tasks. With a user-friendly interface, it allows users to add, edit, and delete todo items effortlessly. By logging in, users gain access to additional features, such as the ability to delete tasks. Moreover, the app ensures data persistence by utilizing the browser's local storage, enabling users to revisit their todos even after closing the application. With its simplicity and practicality, the todo app offers an effective solution for organizing and tracking tasks, helping users stay productive and focused on their goals.",
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
        'Emmanuel Tofa is a passionate web developer who specializes in creating innovative applications. With a keen interest in exploring new web technologies, he constantly experiments and integrates cutting-edge features into his projects. Additionally, Emmanuel shares his knowledge and expertise by providing insightful guides that offer practical insights and actionable steps for fellow developers.',
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2 className="about-title">{title}</h2>
      <p className="about-description">{description}</p>
    </div>
  );
};
export default SinglePage;
