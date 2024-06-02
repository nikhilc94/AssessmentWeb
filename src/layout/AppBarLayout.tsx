import React from "react";
import { Box, Grid, Toolbar, Container, AppBar as MuiAppBar } from "@mui/material";

type AppBarLayoutType = {
  headerText?: string;
  headerRightContent?: React.ReactElement;
  content: React.ReactElement;
};

const AppBarLayout = (props: AppBarLayoutType) => {
  const { headerText = "", headerRightContent, content } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>{headerText}</Box>
          {headerRightContent}
        </Toolbar>
      </MuiAppBar>
      <Container maxWidth="lg">
        <Grid item container spacing={1} justifyContent={"center"} marginTop={7}>
          <Grid item container xs={12} sm={12} md={12} lg={12} justifyContent={"center"}>
            {content}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppBarLayout;
