import React from "react";

import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  Modal,
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  TextField,
  Switch
} from "@mui/material";

import { DateTimePicker, LocalizationProvider } from "@mui/lab";

import AdapterDateFns from "@mui/lab/AdapterDateFns";

const dateFormat = require('../utils/dateFormat');

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  minWidth: "50%",
  minHeight: "80%",
  borderRadius: "30px",
};

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function TaskCard(props) {

  const [editModal, setEditModal] = React.useState(false);

  const handleEditModalOpen = () => setEditModal(true);

  const handleEditModalClose = () => setEditModal(false);

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function borderColorCheck() {
    if (props.status.toLowerCase() === "submitted") {
      let style = {
        boxShadow: "0px 0px 10px #00BC5E",
        minWidth: "300px",
        maxWidth: "300px",
        margin: "25px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      };
      return style;
    } else if (props.status.toLowerCase() === "pending") {
      let style = {
        boxShadow: "0px 0px 10px #E8FF00",
        minWidth: "300px",
        maxWidth: "300px",
        margin: "25px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      };
      return style;
    } else {
      let style = {
        boxShadow: "0px 0px 10px #BC0000",
        minWidth: "300px",
        maxWidth: "300px",
        margin: "25px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      };
      return style;
    }
  }

  const [checked, setChecked] = React.useState(true);

    const handleSwitchChange = (event) => {
      setChecked(event.target.checked);
      console.log(event.target.checked);
    };

  function checkChecked(){
    if(checked){
        return(
            <FormControl variant="standard" sx={{ m: 1, minWidth:'250px'}}>
                <InputLabel id="demo-simple-select-label">Renew In</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-size-medium"
                    label="Status"
                    size="medium"
                    defaultValue = ""
                    >
                    <MenuItem value={'1'}>Daily</MenuItem>
                    <MenuItem value={'7'}>Weekly</MenuItem>
                    <MenuItem value={'31'}>Monthly</MenuItem>
                    <MenuItem value={'183'}>Every 6-Months</MenuItem>
                    <MenuItem value={'365'}>Yearly</MenuItem>
                </Select>
            </FormControl>
        )
    }
}
 


  return (
    <>
      <Card sx={borderColorCheck()}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Baskervville",
            textAlign: "center",
            marginY: "5px",
          }}>
          {props.status}
        </Typography>
        <Divider
          sx={{
            width: "50%",
            margin: "auto",
            borderBottomWidth: 3,
            marginY: "5px",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Baskervville",
            textAlign: "center",
            marginY: "5px",
          }}>
          {props.firstName} {props.lastName}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Baskervville",
            textAlign: "center",
            marginY: "5px",
          }}>
          {dateFormat(parseInt(props.dueDate))}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Baskervville",
            textAlign: "center",
            marginY: "5px",
            marginX: "15px",
          }}>
          {props.desc}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleEditModalOpen}
          sx={{
            fontSize: "20px",
            bgcolor: "primary.main",
            color: "primary.light",
            borderRadius: "10px",
          }}>
          Change Status
        </Button>
      </Card>
      <Modal open={editModal} onClose={handleEditModalClose}>
        <Box sx={style}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Baskervville",
              textAlign: "center",
              marginY: "5px",
            }}>
            Edit Task
          </Typography>

          <FormControl variant="standard">
            <TextField
              label="Employee Id"
              id="outlined-size-medium"
              defaultValue={props.employeeId}
              size="medium"
            />
            <FormHelperText id="component-helper-text">
              "Employee First Name" - "Employee Initials"
            </FormHelperText>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-size-medium"
              value={props.status}
              label="Status"
              size="medium"
              //onChange={handleChange}
            >
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"overdue"}>Overdue</MenuItem>
              <MenuItem value={"submitted"}>Submitted</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Due Date"
                id="size-medium"
                value={value}
                onChange={handleChange}
                size="medium"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>

          <FormControl>
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              minRows={4}
              value={props.desc}
            />
          </FormControl>

          <FormControl sx={{display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              minWidth: '100%'
                              }}>
              <Typography variant="p"
                sx={{
                  fontFamily: "Baskervville",
                  textAlign: "center",
                  fontSize:'25px'
                }}>
                Is This Task Recurring?
              </Typography>
              <Switch  
                  size="large" 
                  defaultChecked
                  {...label}
                  onChange={handleSwitchChange} 
                />
            </FormControl>

            {checkChecked()}

            

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              fontSize: "20px",
              bgcolor: "primary.main",
              color: "primary.light",
              borderRadius: "10px",
            }}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
