import React from 'react'
import {
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  fade,
  IconButtonProps,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.action.disabled,
      '&:hover': {
        color: theme.palette.error.main,
        backgroundColor: fade(theme.palette.error.main, 0.1),
      },
    },
  }),
)

export const DeleteNoteButton = (props: IconButtonProps) => {
  const classes = useStyles()

  return (
    <IconButton className={classes.root} {...props}>
      <DeleteIcon />
    </IconButton>
  )
}
