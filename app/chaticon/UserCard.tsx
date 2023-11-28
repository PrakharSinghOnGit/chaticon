import React from "react";

interface UserCardProps {
  img: string;
  name: string;
  msg: string;
  time: string;
  unread?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  img,
  name,
  msg,
  time,
  unread,
}) => {
  return (
    <div className="bg-backgroundColor rounded-xl flex h-max p-2 items-center gap-2 flex-shrink-0 self-stretch relative select-none">
      <img
        style={
          unread
            ? { border: "2px solid white", boxShadow: "0 0 0 2px green" }
            : {}
        }
        className="rounded-lg pointer-events-none"
        width={35}
        src={img}
        alt={name}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{name}</span>
        <p className="text-xs">{msg}</p>
        <p
          className="text-xs text-gray-500 absolute right-0 top-0 m-1 mr-2"
          style={unread ? { color: "green" } : {}}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
