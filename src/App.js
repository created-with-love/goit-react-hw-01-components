import Profile from './components/Profile';
import profileData from './data/user.json';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList';
import friendsData from './data/friends.json';
import Transactions from './components/TransactionHistory';
import transactionsData from './data/transactions.json';

function App() {
  const { name, tag, location, avatar, stats } = profileData;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList props={friendsData} />
      <Transactions props={transactionsData} />
    </>
  );
}

export default App;
