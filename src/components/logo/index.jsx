import { useState } from 'react';
import { Container } from "./style";
import { Button, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import hanldError, { StringError } from '../../erorr/handleError';
function Index() {

    //value mặt định lúc đầu là chuỗi rỗng
    const [value, setValue] = useState();
    const [alert, setAlert] = useState(true);
    var empty = {};

    //function xử lí component sau khi submit và value của DateTimePicker === null
    function renderTextField(props) {
        empty = { ...props, error: true, label: "error", helperText: StringError.emptyDate};
        if (value === null) {
            return <TextField {...empty}/>
        }
        return <TextField {...props} />
    }

    //function xử lí component <TextField />
    function handleHelperRenderInput (props) {
        empty = { ...props, helperText: StringError.invalidDate};
        return props.error ? <TextField {...empty} /> : renderTextField(props)
    }

    return (
        <Container>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => handleHelperRenderInput(props)}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                />
            </LocalizationProvider>
            <Button className='mt-4' onClick={() => setAlert(!alert)} variant="contained">Click Me</Button>
            {alert ? hanldError(value) : ""}
        </Container>
    )

}

export default Index;