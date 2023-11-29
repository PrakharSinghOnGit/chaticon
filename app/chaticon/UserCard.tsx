import React from "react";

interface UserCardProps {
  img?: string;
  name?: string;
  msg?: string;
  time?: string;
  unread?: number;
}

const UserCard: React.FC<UserCardProps> = ({
  img = "",
  name = "Person",
  msg = "",
  time = "",
  unread = 0,
}) => {
  return (
    <div className="bg-backgroundColor rounded-xl flex h-max p-2 items-center gap-2 flex-shrink-0 self-stretch relative select-none hover:shadow-md">
      <img
        style={{
          border: "2px solid white",
          boxShadow: `0 0 0 2px ${
            unread > 0 ? "var(--highlightGreen)" : "transparent"
          }`,
        }}
        className="rounded-lg pointer-events-none"
        width={35}
        src={img}
        alt={name}
      />
      <div className="flex flex-col flex-grow overflow-hidden">
        <span className="font-semibold text-sm">{name}</span>
        <p className="text-xs overflow-hidden whitespace-nowrap text-overflow-ellipsis w-auto">
          {msg}
        </p>
        <p
          className="text-xs text-gray-500 absolute right-0 top-0 m-1 mr-2"
          style={unread > 0 ? { color: "var(--highlightGreen)" } : {}}
        >
          {time}
        </p>
        <div
          style={{
            display: unread > 0 ? "block" : "none",
            boxShadow: "0 0 0 4px var(--backgroundColor)",
          }}
          className="min-w-max px-1 h-fit absolute rounded-full bg-highlightGreen m-1 right-1 bottom-0 text-center"
        >
          <p
            style={{ fontSize: 10 }}
            className="text-highlightTextColor font-semibold"
          >
            {unread}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
