import { makeStyles } from '@material-ui/core/styles';

const styles : any = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        marginTop: 15
    },
    paper: {
        padding: theme.spacing(4),
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
        marginBottom: theme.spacing(4),
    },
    card: {
        maxWidth: 250,
      },
      media: {
        height: 140,
      },
}));

export default styles;