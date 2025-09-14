import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Jane Doe" age={28} bio="Passionate traveler and foodie." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
