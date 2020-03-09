import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'react-bootstrap';


export default function Experience() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={Years}
      getOptionLabel={option => option.title}
      style={{ width: 200 }}
      renderInput={params => <TextField  {...params} label="Experience" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Years = [
  {title:'o'},
  {title:'1'},
  {title:'2'},
  {title:'3'},
  {title:'4'},
  {title:'5'},
  {title:'6'},
  {title:'7'},
  {title:'8'},
  {title:'9'},
  {title:'10'},
  {title:'11'},
  {title:'12'},
  {title:'13'},
  {title:'14'},
  {title:'15'},
  {title:'16'},
  {title:'17'},
  {title:'18'},
  {title:'19'},
  {title:'20'},
  {title:'21'},
  {title:'22'},
  {title:'23'},
  {title:'24'},
  {title:'25+'},

];