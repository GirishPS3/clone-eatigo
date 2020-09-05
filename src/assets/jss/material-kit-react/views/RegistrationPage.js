import { container, title, primaryColor } from "../../material-kit-react.js";

const RegistrationPageStyle = theme => ({
    root: {
        height: '100vh',
      },
      image: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundPosition: 'center',
      },
      imageWidth: {
        height: '100vh',
        width: '100%'
      },
      search: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '60%',
      },
      radioButton: {
        display: 'flex',
        flex: 'wrap',
        flexDirection: 'row'

      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minWidth: '70%'
      },
      searchButton: {
        margin: '0',
        border: 'none',
        fontWeight: '500',
        lineHeight: '20px',
        color: '#fff',
        flex: 1,
        maxWidth: '210px',
        padding: '16px 20px',
        background: '#ee2c30',
        borderRadius: '0 2px 2px 0',
        letterSpacing: '1.71px',
        height: '52px',
        position: 'relative'
      },
      banner: {
        marginBottom: '36px',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      },
      avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
      },
      input: {
        width: '100%',
        flex: 1,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
});

export default RegistrationPageStyle;
