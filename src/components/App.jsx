import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default App;
