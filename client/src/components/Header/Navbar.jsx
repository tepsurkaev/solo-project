import { Button, Grid, Popover, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  aboutLink: {
    color: "white",
    textDecoration: "none",
  },
  admin: {
    cursor: "pointer",
  },
  deleteLink: {
    textDecoration: "none",
  },
});

function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Typography className={classes.admin} onClick={handleClick}>
          Admin
        </Typography>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid>
          <Grid item xs={8} sm={8} md={6} lg={12}>
            <NavLink className={classes.deleteLink} to="/admin/deleting">
              <Button size="small">Delete products</Button>
            </NavLink>
          </Grid>
          <Grid item xs={8} sm={8} md={6} lg={12}>
            <NavLink className={classes.deleteLink} to="/admin/editing">
              <Button size="small">Edit products</Button>
            </NavLink>
          </Grid>
          <Grid item xs={8} sm={8} md={6} lg={12}>
            <NavLink className={classes.deleteLink} to="/admin/adding">
              <Button size="small">Add products</Button>
            </NavLink>
          </Grid>
        </Grid>
      </Popover>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Typography>
          <NavLink className={classes.aboutLink} to="/about">
            About
          </NavLink>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Navbar;
