import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PCdummy from '../../assets/images/recommend/pc_dummy.webp';
import { Table, TableContainer, TableRow, TableCell } from "@mui/material";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
    setExpanded(!expanded);
};

return (
    <Card sx={{ maxWidth: 380 }}>
        <CardHeader
        title="당신을 위한 사무작업용 PC"
        />
        <CardMedia
        component="img"
        height="194"
        image={PCdummy}
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            범용 사무 PC 추천
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        >
        <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableRow>
                            <TableCell align="center" component="th">CPU</TableCell>
                            <TableCell align="center">intel pentium gold G7400</TableCell>
                            <TableCell align="center" component="th">메모리</TableCell>
                            <TableCell align="center">DDR4-2666 8GB</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" component="th">메인보드</TableCell>
                            <TableCell align="center">ASRock H610M-HDV/M2 D4</TableCell>
                            <TableCell align="center" component="th">SSD</TableCell>
                            <TableCell align="center">PNY CS900 제이씨현</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" component="th">케이스</TableCell>
                            <TableCell align="center">앱코 NCORE S10M</TableCell>
                            <TableCell align="center" component="th">파워</TableCell>
                            <TableCell align="center">micronix coolmax vision2</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </CardContent>
        </Collapse>
    </Card>
    );
}
