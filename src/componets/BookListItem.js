import React, { Component } from "react";
import {withStyles} from '@material-ui/core'
import { Paper, Grid, Typography } from "@material-ui/core";

const styles = {
  image : {
    width:128,
    height: 168,
  },
  textArea: {
    width : 390
  },
}
class BookListItem extends Component {
  render() {
    const {classes , book  } = this.props;
    return (
      <Paper>
        <Grid container spacing={2} >
          <Grid item>
            <img className={classes.image} src={book.imgUrl} alt="" />
          </Grid>
          <Grid item className={classes.textArea}>
            <Typography component="h5" variant="h5">
              {book.title}
            </Typography>
            <Typography gutterBottom>
              {book.author}
            </Typography>
            <Typography color='textSecondary'>
              {book.introduce}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles) (BookListItem);
