import * as React from "react";
import {
    Controller,
} from "react-hook-form";
import TextField from "@mui/material/TextField";

const TextFieldComponent = (props) => {
    return (
        <div>
            <Controller
                name={props.name}
                control={props.control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={props.label}
                        // variant="outlined"
                        variant={props.variant ? props.variant : "outlined"}
                        size={"small"}
                        margin={"normal"}
                        fullWidth
                        type={props.type || "text"}
                        disabled={props.disabled}
                        color={props.errors?.message ? "secondary" : "primary"}
                        error={props.errors?.message !== undefined}
                        helperText={
                            props.errors?.message
                                ? props.errors?.message
                                : props.helperText
                        }
                    />
                )}
            />
        </div>
    );
};

export default TextFieldComponent;