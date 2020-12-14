
import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import { Agenda, Login, PeoplePicker } from "@microsoft/mgt-react";

export const EpmsPeoplePicker = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );
  return (
    <div className={classes}>

      <PeoplePicker id={id} className="text-input" {...props} />
    </div>
  );
};
