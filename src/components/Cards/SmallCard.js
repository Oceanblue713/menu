import React from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";

const SmallCard = (props) => {
  return (
    <div className="smallcard">
      <Box sx={{ maxWidth: 400 }}>
        <Card>
          <Link to={`/article/${props.link}`}>
            <h5>{props.title}</h5>
            <CardMedia
              component="img"
              image={props.image}
              alt={props.title}
              height={150}
            />
          </Link>
        </Card>
      </Box>
    </div>
  );
};

export default SmallCard;
