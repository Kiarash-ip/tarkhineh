import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, FieldHookConfig } from "formik";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import * as Yup from "yup";
import RtlProvider from "./RtlProvider";
import tailwindConfig from "@@/tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { styled } from "@mui/material/styles";

interface OtherProps {
  label: string;
  multiline?: boolean;
  rows?: number;
}

let { theme: tw_theme } = resolveConfig(tailwindConfig);

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  fontFamily: "inherit",
  height: "100%",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: tw_theme?.colors.neutral[800],
  },
  "& .MuiInputBase-input": {
    padding: "8px 16px",
    color: tw_theme?.colors.neutral[200],
    fontFamily: "inherit",
    backgroundColor: "transparent",
  },
  "& label.Mui-focused": {
    color: tw_theme?.colors?.primary[400],
  },
  "& .MuiOutlinedInput-root:not(.Mui-error, .Mui-focused)": {
    "&:hover fieldset": {
      borderColor: tw_theme?.colors.neutral[200],
    },
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: tw_theme?.colors.primary[400],
    },
  },
}));

const CustomTextInput = ({
  label,
  multiline = false,
  rows = 1,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <RtlProvider>
      <>
        <CustomTextField
          size="small"
          fullWidth
          rows={rows}
          InputLabelProps={{
            sx: {
              fontFamily: "inherit",
              color: tw_theme?.colors.neutral[200],
            },
          }}
          {...field}
          inputProps={{
            style: {
              // height: "100%",
            },
          }}
          id="outlined-basic"
          label={label}
          multiline={multiline}
          variant="outlined"
          placeholder={props.placeholder}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
        {multiline ? (
          <span className="block text-left mt-1 text-neutral-500 text-xs font-normal">
            200 / {meta.value.length}
          </span>
        ) : null}
      </>
    </RtlProvider>
  );
};

export default CustomTextInput;
