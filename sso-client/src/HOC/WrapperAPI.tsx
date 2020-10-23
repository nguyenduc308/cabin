import React from "react";
import { connect } from "react-redux";
import {
  getItemById,
  getItems,
  login,
  deleteItem,
  createItem,
  updateItem,
  verifyToken,
} from "actions/api";
import { IAPIMethod } from "interfaces";
interface IWrapperAPIProps {}

const WrapperAPI = (Component: React.FC<any>) => {
  // logic more
  const ComponentWithAPI: React.FC<IWrapperAPIProps & IAPIMethod & any> = (
    props
  ) => {
    const newProps = {
      ...props,
      getItems: props.getItems,
      getItemById: props.getItemById,
      updateItem: props.updateItem,
      deleteItem: props.deleteItem,
      createItem: props.createItem,
      login: props.login,
      verifyToken: props.verifyToken,
    };
    return <Component {...newProps} />;
  };
  return connect(null, {
    getItemById,
    getItems,
    login,
    updateItem,
    createItem,
    deleteItem,
    verifyToken,
  })(ComponentWithAPI);
};

export default WrapperAPI;
