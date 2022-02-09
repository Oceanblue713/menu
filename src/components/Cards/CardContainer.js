import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import LargeCard from "./LargeCard";
import { articles } from "../../articles/article1";

export default function CardContainer() {
  const [contents, setContents] = useState([]);

  const getContents = () => {};

  useEffect(() => {
    getContents();
  }, []);

  return (
    <div>
      <Grid container>
        {articles.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <LargeCard title={item.title_en} />
            </Grid>
          );
        })}

        <Grid item xs={12} sm={6} md={4}>
          <LargeCard />
        </Grid>
      </Grid>
    </div>
  );
}
