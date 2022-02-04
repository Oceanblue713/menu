import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import LargeCard from "./LargeCard";

export default function CardContainer() {
  const [contents, setContents] = useState({});

  const getContents = () => {
    fetch("article1.json");
    console.log("effect");
  };

  useEffect(() => {
    getContents();
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <LargeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LargeCard />
      </Grid>
    </Grid>
  );
}
