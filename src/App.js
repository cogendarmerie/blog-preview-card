import logo from './logo.svg';
import './assets/css/main.css';
import { BlogPreviewCardAuthor, BlogPreviewCardCategorie, BlogPreviewCardDescription, BlogPreviewCardMiddlePart, BlogPreviewCardPicture, BlogPreviewCardPublished, BlogPreviewCardTitle, BlogPreviewCardWrapper } from './components/blog';

function App() {
  return (
    <div className="App">
      <BlogPreviewCardWrapper>
        <BlogPreviewCardPicture src={"/assets/images/illustration-article.svg"} alt={"Illustration de l'article"}/>
        <BlogPreviewCardMiddlePart>
          <BlogPreviewCardCategorie>Learning</BlogPreviewCardCategorie>
          <BlogPreviewCardPublished>21 Dec 2023</BlogPreviewCardPublished>
          <BlogPreviewCardTitle>HTML & CSS foundations</BlogPreviewCardTitle>
          <BlogPreviewCardDescription>These languages are the backbone of every website, defining structure, content and presentation.</BlogPreviewCardDescription>
        </BlogPreviewCardMiddlePart>
        <BlogPreviewCardAuthor name={"Greg Hooper"} avatar={"/assets/images/image-avatar.webp"} />
      </BlogPreviewCardWrapper>
    </div>
  );
}

export default App;
