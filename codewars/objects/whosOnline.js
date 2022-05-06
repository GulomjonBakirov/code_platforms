const whosOnline = (friends) => {
  let obj = {
    online: [],
    offline: [],
    away: [],
  };
  for (let i = 0; i < friends.length; i++) {
    if (friends[i]["status"] === "online" && friends[i]["lastActivity"] <= 10) {
      obj.online.push(friends[i]["username"]);
    }
    if (friends[i]["status"] === "online" && friends[i]["lastActivity"] > 10) {
      obj.away.push(friends[i]["username"]);
    }
    if (friends[i]["status"] === "offline") {
      obj.offline.push(friends[i]["username"]);
    }
  }
  Object.keys(obj).forEach((k) => {
    if (obj[k].length === 0) delete obj[k];
  });
  return obj;
};
console.log(
  whosOnline([
    {
      username: "David",
      status: "offline",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ])
);
