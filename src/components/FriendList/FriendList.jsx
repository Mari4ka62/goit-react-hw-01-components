import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem"
export default function FriendList({ friends }) {
    return <ul className="friend-list">
        {friends.map(friend =>
            <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />)}
</ul>
}
FriendListItem.propTypes = {
    friends:PropTypes.array,
}