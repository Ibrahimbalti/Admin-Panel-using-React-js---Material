import React from 'react'
import { Box, Button, Grid,Typography } from '@material-ui/core'
import { useStyles } from './Body/BodyStyle'
import FavoriteIcon from '@material-ui/icons/Favorite';
export default function FooterComponent() {
    const classes = useStyles()
    const date = new Date()
    return (
        <Box className={classes.Footer} >
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant='body2' color="textSecondary" align='center' >
                        Create with
                        <Button size="small">
                            <FavoriteIcon color="secondary" />
                        </Button>
                        and affection
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant='body2' color="textSecondary" align='center' style={{marginTop:'4px'}}>
                        All right reserved @M.Ibrahim {date.getFullYear()}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
