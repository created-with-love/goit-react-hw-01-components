import Profile from './components/Profile/Profile';
import profileData from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';
import Transactions from './components/Transactions/TransactionHistory';
import transactionsData from './data/transactions.json';
import Section from './components/Section/Section';

function App() {
  const { name, tag, location, avatar, stats } = profileData;
  return (
    <Section classNames="userCard">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friendsData={friendsData} />
      <Transactions transactionsData={transactionsData} />
    </Section>
  );
}

export default App;
