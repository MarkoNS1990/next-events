import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          date={event.date}
          location={event.location}
          image={event.image}
          title={event.title}
        />
      ))}
    </ul>
  );
}

export default EventList;
