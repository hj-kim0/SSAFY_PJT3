import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import PCdummy from '../../assets/images/recommend/pc_dummy.webp';


export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
    setExpanded(!expanded);
};

return (
    <Card sx={{ maxWidth: 380 }}>
        <CardHeader
        title="PC"
        />
        <CardMedia
        component="img"
        height="194"
        image={PCdummy}
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
    </Card>
    );
}
