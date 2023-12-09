import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from './path/to/user.json';
import data from './path/to/data.json';
import transactions from './path/to/transactions.json';
import friends from './path/to/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;