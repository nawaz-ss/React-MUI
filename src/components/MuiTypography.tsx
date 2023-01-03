import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface IProps {}

/**
* @author
* @function @MuiTypography
**/

export const MuiTypography:FC<IProps> = (props) => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">subtitle 1</Typography>
            <Typography variant="subtitle2">subtitle 2</Typography>

            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed mag et just adipiscing amet</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed mag et just adipiscing amet</Typography>
        </div>
    )
}

