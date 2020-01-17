import React from "react";

import { Grid, Button, List, ListSubheader, ListItem, 
  ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, 
  TextField, DialogActions } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const LeftBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function dialog() {
    return (
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create new page</DialogTitle>
          <DialogContent>
          <DialogContentText>
            Hello my name is Kappa, please insert a name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Page name"
            fullWidth
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

    return (
        <Grid item xs={4}>
                {dialog()}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start">
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<CreateIcon />}
              onClick={handleClickOpen}
              >
                Create
            </Button>
      </Grid>
          <List subheader={<ListSubheader>Category</ListSubheader>} component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="SharePoint" />
            </ListItem>
            <ListItemLink href="/test">
              <ListItemText primary="React" />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText primary="React Native" />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText primary="NodeJs" />
            </ListItemLink>
          </List>
          <List subheader={<ListSubheader>Last articles</ListSubheader>} component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText 
              primary="SharePoint"
              secondary="lorem ipsum..." />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText 
              primary="React"
              secondary="lorem ipsum..." />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText 
              primary="React Native"
              secondary="lorem ipsum..."  />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText 
              primary="NodeJs"
              secondary="lorem ipsum..."  />
            </ListItemLink>
          </List>
        </Grid>
    )
}

export default LeftBar;