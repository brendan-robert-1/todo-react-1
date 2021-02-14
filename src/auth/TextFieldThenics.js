import React from 'react'
import{useField} from 'formik'
import { TextField} from '@material-ui/core'
// This custom prop essentially wraps TextField but wires up error and helper text based on the
// Formik hook useFields to get like if its touched etc
export default function TextFieldThenics(props){
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
      <div><TextField {...field} className={props.className} helperText={errorText} error={!!errorText} type={props.type} variant="outlined" label={props.label}/></div>
    )
  };