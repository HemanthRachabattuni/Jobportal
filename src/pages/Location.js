import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'react-bootstrap';


export default function Location() {
  return (
    <Autocomplete
      // id="combo-box-demo"
      options={Cities}
      getOptionLabel={option => option.title}
      style={{ width: 150 }}
      renderInput={params => <TextField  {...params} label="Location" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Cities = [
  { title: 'Ahmedabad',  },
 { title: 'Bangalore',  },
  { title: 'Chennai', },
  { title: 'Delhi',},
  { title: 'Gurgaon', },
  { title: 'Hyderabad', },
  { title: "Indore", },
  { title: 'Jaipur', },
  { title: 'Kolkata', },
  { title: 'Mumbai', },
  { title: 'Mysore', },
  { title: 'Nagpur', },
  { title: 'Noida',},
  { title: 'Patna', },
  { title: 'Pune',  },
  { title: 'Puri',  },
  { title: "Rajkot",  },
  { title: 'Ranchi', },
  { title: 'Vellore',  },
  { title: 'Visakhapatnam', },
  
];