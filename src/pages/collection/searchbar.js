// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import fade from '@material-ui/core/Fade';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';

// const useStyles = makeStyles(theme => ({
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.orange, 0.15),
//         '&:hover': {
//           backgroundColor: fade(theme.palette.common.orange, 0.25),
//         },
//     },
//         searchIcon: {
//             padding: theme.spacing(0, 2),
//             height: '100%',
//             position: 'absolute',
//             pointerEvents: 'none',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           },
//           inputRoot: {
//             color: 'inherit',
//           },
//           inputInput: {
//             padding: theme.spacing(1, 1, 1, 0),
//             // vertical padding + font size from searchIcon
//             paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//             transition: theme.transitions.create('width'),
//             width: '100%',
//             [theme.breakpoints.up('md')]: {
//               width: '20ch'
//             }
//         }
// }))

// export default function SearchBar() {
//     const classes = useStyles()

//     return (
//         <div className={classes.search}>
//         <div className={classes.searchIcon}>
//           <SearchIcon />
//         </div>
//         <InputBase
//           placeholder="Search…"
//           classes={{
//             root: classes.inputRoot,
//             input: classes.inputInput,
//           }}
//           inputProps={{ 'aria-label': 'search' }}
//         />
//       </div>
//     )

// }