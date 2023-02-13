import ReactDOM from "react-dom/client";

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps): JSX.Element => {
  
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Welcome name='Sarah' />
);

