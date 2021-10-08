import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import React from 'react'

const useStyles = makeStyles({
    root: {
      width: 200,
    },
  });

const SideBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 125]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div className="col-lg-3">
            <h5 className="my-4">Search Here</h5>
            <div className="list-group">
                <a href="#" className="list-group-item">Daily</a>
                <a href="#" className="list-group-item">Weekly</a>
                <a href="#" className="list-group-item">Monthly</a>
            </div>
            <div className='list-group'>
                <h6 style={{margin: '15px',alignSelf: 'center'}}>Select Price Range</h6>
                <h6 style={{margin: '15px',alignSelf: 'center',color: 'black'}}>Min-{value[0]}  Max-{value[1]}</h6>
                <div className={classes.root} style={{margin: 'auto'}}>
                    <Slider
                        min={0}
                        max={125}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div>
            </div>
        </div>
    );
}

export default SideBar;