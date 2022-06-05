import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";

const SmallCard = (props) => {
  return (
    <div className="smallcard">
      <Card sx={{ display: "flex" }}>
        <h5>{props.title}</h5>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          sx={{ width: 1 / 2, height: 1 / 2 }}
        />
      </Card>
    </div>
  );
};

export default SmallCard;
