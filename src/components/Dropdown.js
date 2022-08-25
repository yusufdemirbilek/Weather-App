import { useWeather } from '../context/WeatherContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown() {
  const { city, setCity, cityJSON } = useWeather();

  const changeCity = (e) => {
    cityJSON.filter((item) => {
      if (item.name == e.target.value) {
        setCity(item);
      }
    });
  };

  return (
    <div className="select-box">
        <FormControl sx={{ m: 1, width: 300}}>
        <b className='b'>City</b>
        <Select
        name="cities"
        id="cities"
        value={city.name}
        onChange={changeCity}
      >
        {cityJSON.map((item, i) => {
          return (
            <MenuItem value={item.name} key={i}>
              {item.name}
            </MenuItem>
          );
        })}
       </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;